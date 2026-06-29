// Submits the #contactUs form to the Carenuity SharePoint inbox.
// Imported and called from ContactClient's onSubmit handler (React-friendly).
const SHAREPOINT_BASE =
  "https://sharepoint-dot-solution-builder-421307.ew.r.appspot.com";

export async function submitContactForm(form) {
  const response = await fetch(
    `${SHAREPOINT_BASE}/api/v1/sharepoint/lists/${encodeURIComponent(
      "Carenuity Inbox"
    )}/items`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          Name: form.name.value,
          Email: form.email.value,
          Company: form.company.value,
          Mobile: form.mobile.value,
          Street: form.street.value,
          Zip: form.zip.value,
          Subject: form.subject.value,
          Message: form.message.value,
        },
      }),
    }
  );

  if (!response.ok) {
    let message = "Submission failed.";
    try {
      const data = await response.json();
      message = data.message || message;
    } catch {
      /* response had no JSON body */
    }
    throw new Error(message);
  }

  return true;
}
