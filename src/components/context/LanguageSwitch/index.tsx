import { ReactNode, createContext, useReducer } from "react";
import {
  LANG,
  LanguageSwitchAction,
  LanguageSwitchReducerObject,
} from "./index.types";

const initialState: LANG = "en";

const reducer = (state: LANG, action: LanguageSwitchAction): LANG => {
  switch (action.type) {
    case "SET":
      return action.lang;

    default:
      return state;
  }
};

export const LanguageSwitchContext = createContext<LanguageSwitchReducerObject>(
  {
    state: initialState,
    dispatch: () => {},
  },
);

export const LanguageSwitchProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageSwitchContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageSwitchContext.Provider>
  );
};
