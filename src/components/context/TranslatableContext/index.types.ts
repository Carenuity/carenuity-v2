import { Dispatch } from "react";

export interface TranslatableContextReducerObject {
  state: boolean;
  dispatch: Dispatch<TranslatableContextAction>;
}

export type LangSwitchDisplayStatus = "SHOW" | "HIDE";

export interface TranslatableContextAction {
  type: LangSwitchDisplayStatus;
}
