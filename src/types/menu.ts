export const LANG_ENGLISH = "en";
export const LANG_GERMANY = "de";
export const SOLUTIONS_BUILDER_URL = "https://solutions.carenuity.com";

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
