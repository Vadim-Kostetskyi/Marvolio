import { useTranslation } from "react-i18next";

const Keys = () => {
  const { t } = useTranslation();

  const anchors = [
    { href: "/", title: t("home") },
    { href: "/#about", title: t("about") },
    { href: "/#projects", title: t("projects") },
    { href: "/#contact", title: t("contact") },
  ];

  return anchors;
};

export default Keys;
