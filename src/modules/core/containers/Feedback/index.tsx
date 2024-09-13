import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Title from "modules/core/components/Title";
import InputFeedback from "modules/core/components/InputFeedback";
import { useFormProps } from "./data";
import "react-toastify/dist/ReactToastify.css";
import styles from "./index.module.scss";

export interface Form {
  user_name: string;
  user_email: string;
  message: string;
}
const Feedback = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { formProps, titleProps } = useFormProps();

  const sendEmail: SubmitHandler<Form> = () => {
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID || "",
          process.env.REACT_APP_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.REACT_APP_PUBLIC_KEY || "",
          }
        )
        .then(
          () => {
            setIsLoading(false);
            toast.success(t("toastify.success"));
          },
          (error) => {
            setIsLoading(false);
            toast.error(t("toastify.error"));
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <section className={styles.wrapper} id="contact">
      <Title {...titleProps} />
      <form
        className={styles.form}
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        {formProps.map((props) => (
          <InputFeedback {...props} register={register} errors={errors} />
        ))}
        <div className={styles.submitBox}>
          <input
            className={isLoading ? styles.buttonLoad : styles.button}
            type="submit"
            disabled={isLoading}
            value={t("Feedback.send")}
          />
          {isLoading && <div className={styles.loader}></div>}
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Feedback;
