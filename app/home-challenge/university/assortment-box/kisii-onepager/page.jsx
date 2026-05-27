export const metadata = {
  title: "Kisii Onepager — Carenuity",
  description: "Kisii Onepager PDF viewer.",
};

export default function KisiiOnepagerPage() {
  return (
    <iframe
      src="/docs/kisii-onepager.pdf"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}
