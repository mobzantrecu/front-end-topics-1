import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import pircheersIcon from "../../../public/companyIcon.png";
import menuIcon from "../../../public/menu.png";
import { Button } from "../../components/Button";
import headerStyles from "./Header.module.css";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

const CREATE_ACCOUNT_TEXT = "Create account";
const SIGN_IN_TEXT = "Sign in";

// Nav vs MemoizedNav
const Nav = () => {
  return (
    <nav className={headerStyles.nav}>
      <section className={headerStyles.iconMenuContainer}>
        <Image
          className={headerStyles.icon}
          src={pircheersIcon}
          alt="Icon of the company"
        ></Image>
        <Image
          className={headerStyles.menu}
          src={menuIcon}
          alt="Hamburger menu"
        ></Image>
      </section>

      <section
        data-test-id="button-container"
        className={headerStyles.buttonContainer}
      >
        <a role="button" className={headerStyles.signInButton}>
          {SIGN_IN_TEXT}
        </a>
        <Button
          layoutComponentClasses={headerStyles.createAccountButton}
          modifier="outline"
          onClick={() => console.log(1)}
          testId="search-bar-button"
        >
          <span className={headerStyles.buttonText}>{CREATE_ACCOUNT_TEXT}</span>
        </Button>
      </section>
    </nav>
  );
};
const MemoizedNav = React.memo(Nav);

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };
  const [lang, setLang] = useState("es");

  const favoriteId = useSelector((state: RootState) => state.favorite.value);
  return (
    <header className={headerStyles.header}>
      <MemoizedNav />
      <div style={{ position: "absolute", fontSize: 25 }}>
        {t("layout.favorite")}: {favoriteId}
      </div>
      <section>
        <button
          style={{ position: "absolute", fontSize: "1rem", right: 20 }}
          onClick={() => changeLanguage(lang === "es" ? "en" : "es")}
        >
          {" "}
          change lang
        </button>
      </section>
    </header>
  );
};

export default Header;
