import React, { ElementType, FC } from "react";
import styles from "./index.module.scss";

interface SocialButtonProps {
  Icon: ElementType;
  href: string;
}

const SocialButton: FC<SocialButtonProps> = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" className={styles.wrapper}>
      <Icon className={styles.icon} />
    </a>
  );
};

export default SocialButton;
