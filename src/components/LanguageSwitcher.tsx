"use client";

import { useContext, useEffect } from "react";
import { LanguageSwitchContext } from "./context/LanguageSwitch";
import { LANG } from "./context/LanguageSwitch/index.types";
import Link from "next/link";
import { TranslatableContext } from "./context/TranslatableContext";

const LanguageSwitcher = () => {
  const { state, dispatch } = useContext(LanguageSwitchContext);
  const { state: show, dispatch: setShowDispatch } =
    useContext(TranslatableContext);

  useEffect(() => {
    if (window.document !== undefined) {
      const canTranslate = document.querySelector("#translate");
      if (canTranslate) {
        if (navigator.languages) {
          const lang: LANG = navigator.language.includes("de") ? "de" : "en";
          dispatch({ lang, type: "SET" });
        }
        setShowDispatch({ type: "SHOW" });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <>
      {show && (
        <div className="hstack small align-items-center justify-content-center ms-md-3 gap-1">
          <Link
            title="English"
            href={"#"}
            className={`${
              state === "en" ? "link-success fw-bold" : ""
            } border-end border-2 pe-1`}
            onClick={() => {
              dispatch({ lang: "en", type: "SET" });
            }}
          >
            EN
          </Link>
          <Link
            title="German"
            href={"#"}
            className={state === "de" ? "link-success fw-bold" : ""}
            onClick={() => {
              dispatch({ lang: "de", type: "SET" });
            }}
          >
            DE
          </Link>
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;
