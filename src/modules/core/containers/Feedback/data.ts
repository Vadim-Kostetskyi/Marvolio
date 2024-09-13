import React from "react";
import { useTranslation } from "react-i18next";
import { nameProps } from "utils/constants";

export type FormProps = {
  name: nameProps.name | nameProps.email | nameProps.message;
  title: string;
  type?: string;
  isTextarea?: boolean;
};

export const useFormProps = () => {
  const { t } = useTranslation();

  const formProps: FormProps[] = [
    {
      title: t("Feedback.name"),
      name: nameProps.name,
      type: "text",
    },
    {
      title: t("Feedback.email"),
      name: nameProps.email,
      type: "email",
    },
    {
      title: t("Feedback.message"),
      name: nameProps.message,
      isTextarea: true,
    },
  ];

  const titleProps = {
    title: t("contact"),
    text: t("Feedback.text"),
  };

  return { formProps, titleProps };
};
