// Subscribes an email address to one or more Carenuity newsletter categories.
// Each category triggers its own double opt-in: the API sends a verification
// email that the user must click to confirm that particular subscription.
// Shared by the school registration form and the per-university widget.
const NEWSLETTER_BASE =
  "https://newsletter-dot-solution-builder-421307.ew.r.appspot.com";

async function subscribeToCategory(email, categoryId) {
  const response = await fetch(`${NEWSLETTER_BASE}/v1/subscriptions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, categoryId }),
  });

  if (!response.ok) {
    let message = "Subscription failed.";
    try {
      const data = await response.json();
      // This API nests the reason under error.message; fall back to message.
      message = data.error?.message || data.message || message;
    } catch {
      /* response had no JSON body */
    }
    throw new Error(message);
  }

  return true;
}

// Subscribes `email` to every categoryId in parallel. Each category is an
// independent double opt-in, so successes and failures are reported per id.
// Resolves to { ok, sent: [categoryId...], failed: [{ categoryId, message }...] }
// where `ok` is true only when every category's verification email was queued.
export async function subscribeToNewsletters(email, categoryIds) {
  const results = await Promise.allSettled(
    categoryIds.map((id) => subscribeToCategory(email, id)),
  );

  const sent = [];
  const failed = [];
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      sent.push(categoryIds[i]);
    } else {
      failed.push({
        categoryId: categoryIds[i],
        message: result.reason?.message || "Subscription failed.",
      });
    }
  });

  return { ok: failed.length === 0, sent, failed };
}
