// Submits a Carenuity student survey response to the newsletter API.
// Imported and called from SurveyForm's onSubmit handler (React-friendly).
const NEWSLETTER_BASE =
  "https://newsletter-dot-solution-builder-421307.ew.r.appspot.com";

export async function submitStudentSurvey(payload) {
  const response = await fetch(`${NEWSLETTER_BASE}/v1/student-survey`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Survey submission failed.";
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
