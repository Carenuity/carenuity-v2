import { Dispatch } from "react";

export interface LanguageSwitchReducerObject {
  state: LANG;
  dispatch: Dispatch<LanguageSwitchAction>;
}

export type LANG = "en" | "de";

export interface LanguageSwitchAction {
  type: "SET";
  lang: LANG;
}
