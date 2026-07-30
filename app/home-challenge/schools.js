// `categoryId` is the newsletter category (from the Carenuity newsletter API's
// /v1/sharepoint/newsletter-categories catalog) that a school's "Home Challenge"
// subscription maps to. Only schools with a matching category in the catalog
// have one. Schools without a categoryId have no Home Challenge newsletter, so
// the Home Challenge option is simply hidden for them (rather than subscribing
// them to an unrelated newsletter).
export const schools = [
  { slug: "auth", name: "Aristotle University of Thessaloniki", categoryId: 4 },
  { slug: "bmu", name: "Belgrade Metropolitan University" },
  { slug: "haw", name: "HAW Hamburg" },
  { slug: "tuhh", name: "Hamburg University of Technology (TUHH)" },
  { slug: "ihu", name: "International Hellenic University" },
  { slug: "ku", name: "Kenyatta University" },
  { slug: "ksu", name: "Kisii University", categoryId: 18 },
  { slug: "lmu", name: "Ludwig Maximilian University of Munich (LMU)" },
  { slug: "hm", name: "Munich University of Applied Sciences (HM)" },
  { slug: "strathmore", name: "Strathmore University" },
  { slug: "tum", name: "Technical University of Munich (TUM)" },
  {
    slug: "tum-mombasa",
    name: "Technical University of Mombasa",
    categoryId: 15,
  },
  {
    slug: "etf",
    name: "University of Belgrade – Faculty of Electrical Engineering",
  },
  { slug: "uni-hamburg", name: "University of Hamburg" },
  { slug: "uon", name: "University of Nairobi", categoryId: 20 },
  { slug: "upatras", name: "University of Patras" },
  { slug: "units", name: "University of Trieste" },
  { slug: "jmu", name: "University of Würzburg (JMU)" },
  {
    slug: "fhws",
    name: "Würzburg-Schweinfurt University of Applied Sciences (FHWS)",
    categoryId: 5,
  },
];

export function getSchoolBySlug(slug) {
  return schools.find((s) => s.slug === slug) ?? null;
}

export function getSchoolByName(name) {
  return schools.find((s) => s.name === name) ?? null;
}
