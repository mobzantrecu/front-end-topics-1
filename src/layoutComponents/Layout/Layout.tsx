import React from "react";
import { Header } from "../Header";
import layoutStyles from "./Layout.module.css";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Header />
      <main className={layoutStyles.main}>{children}</main>
      <footer>Este es el Footer</footer>
    </div>
  );
};

export default Layout;
