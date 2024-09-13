import React, { FC } from "react";
import styles from "./index.module.scss";

interface ButtonProps {
  title: string;
  href?: string;
  link?: string;
}

const Button: FC<ButtonProps> = ({ title, href, link }) => {
  return (
    <a
      href={href || link}
      target={href ? "_blank" : "_self"}
      className={styles.link}
    >
      {title}
    </a>
  );
};

export default Button;
