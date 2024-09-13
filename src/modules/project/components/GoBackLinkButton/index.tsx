import React, { FC } from "react";
import { TFunction } from "i18next";
import styles from "./index.module.scss";

interface GoBackLinkButtonProps {
  translate: TFunction;
}

const GoBackLinkButton: FC<GoBackLinkButtonProps> = ({ translate }) => (
  <a href="/" className={styles.link}>
    {translate("goBack")}
  </a>
);

export default GoBackLinkButton;
