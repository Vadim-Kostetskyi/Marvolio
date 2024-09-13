import React, { FC, ReactNode } from "react";
import Header from "modules/core/containers/Header";
import Footer from "modules/core/containers/Footer";
import MarvelLayout from "modules/marvel/containers/MarvelLayout";
import styles from "./index.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <MarvelLayout>
    <Header />
    <div className={styles.main}>{children}</div>
    {/* <Footer /> */}
  </MarvelLayout>
);

export default MainLayout;
