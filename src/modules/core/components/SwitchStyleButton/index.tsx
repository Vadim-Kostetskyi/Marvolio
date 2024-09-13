import React from "react";
import styles from "./index.module.scss";
import { useMarvel } from "modules/marvel/containers/MarvelLayout/context";

const SwitchStyleButton = () => {
  const { marvel, setMarvel } = useMarvel();

  const onClick = () => {
    setMarvel(!marvel);
  };

  return (
    <button
      className={marvel ? styles.active : styles.button}
      onClick={onClick}
    />
  );
};

export default SwitchStyleButton;
