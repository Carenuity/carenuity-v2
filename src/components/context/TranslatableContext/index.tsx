import { ReactNode, createContext, useReducer } from "react";
import {
  TranslatableContextAction,
  TranslatableContextReducerObject,
} from "./index.types";

const initialState: boolean = false;

const reducer = (
  state: boolean,
  action: TranslatableContextAction,
): boolean => {
  switch (action.type) {
    case "SHOW":
      return true;

    case "HIDE":
      return false;

    default:
      return state;
  }
};

export const TranslatableContext =
  createContext<TranslatableContextReducerObject>({
    state: initialState,
    dispatch: () => {},
  });

export const TranslatableProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TranslatableContext.Provider value={{ state, dispatch }}>
      {children}
    </TranslatableContext.Provider>
  );
};
