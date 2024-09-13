import React from "react";
import { marvelImages } from "./data";
import styles from "./index.module.scss";

const MarvelProjects = () => {
  return (
    <div className={styles.banner}>
      <div
        className={styles.slider}
        style={{ "--quantity": "10" } as React.CSSProperties}
      >
        {marvelImages.map((image, index) => (
          <div
            className={styles.item}
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarvelProjects;
