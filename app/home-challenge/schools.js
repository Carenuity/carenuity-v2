export const schools = [
  { slug: "auth",         name: "Aristotle University of Thessaloniki" },
  { slug: "bmu",          name: "Belgrade Metropolitan University" },
  { slug: "haw",          name: "HAW Hamburg" },
  { slug: "tuhh",         name: "Hamburg University of Technology (TUHH)" },
  { slug: "ihu",          name: "International Hellenic University" },
  { slug: "ku",           name: "Kenyatta University" },
  { slug: "ksu",          name: "Kisii University" },
  { slug: "lmu",          name: "Ludwig Maximilian University of Munich (LMU)" },
  { slug: "hm",           name: "Munich University of Applied Sciences (HM)" },
  { slug: "strathmore",   name: "Strathmore University" },
  { slug: "tum",          name: "Technical University of Munich (TUM)" },
  { slug: "tum-mombasa",  name: "Technical University of Mombasa" },
  { slug: "etf",          name: "University of Belgrade – Faculty of Electrical Engineering" },
  { slug: "uni-hamburg",  name: "University of Hamburg" },
  { slug: "uon",          name: "University of Nairobi" },
  { slug: "upatras",      name: "University of Patras" },
  { slug: "units",        name: "University of Trieste" },
  { slug: "jmu",          name: "University of Würzburg (JMU)" },
  { slug: "fhws",         name: "Würzburg-Schweinfurt University of Applied Sciences (FHWS)" },
];

export function getSchoolBySlug(slug) {
  return schools.find((s) => s.slug === slug) ?? null;
}
