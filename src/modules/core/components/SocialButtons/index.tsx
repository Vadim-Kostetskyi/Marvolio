import React, { FC, useState } from "react";
import { TFunction } from "i18next";
import Phone from "assets/svg/Phone";
import SocialButton from "components/SocialButton";
import { socialIconsBlack, socialIconsWhite } from "./data";
import styles from "./index.module.scss";

interface SocialButtonsProps {
  isWhite?: boolean;
  translate?: TFunction;
}

const SocialButtons: FC<SocialButtonsProps> = ({ isWhite, translate }) => {
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER || "";

  const copyPhoneNumber = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      {isWhite ? (
        socialIconsWhite.map(({ SocialLink, link }, index) => (
          <a className={styles.link} href={link} target="_blank" key={link}>
            <SocialLink />
          </a>
        ))
      ) : (
        <>
          <div className={styles.phone} onClick={copyPhoneNumber}>
            <Phone className={styles.phoneIcon} />
            {isVisible && (
              <p className={styles.copied}>
                {translate && translate("copied")}
              </p>
            )}
            <div className={styles.phoneNumber}>
              <p>
                {translate && translate("myPhoneNumber")}: {phoneNumber}
              </p>
            </div>
          </div>
          {socialIconsBlack.map(({ socialLink, link }, index) => (
            <SocialButton Icon={socialLink} href={link} key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default SocialButtons;
