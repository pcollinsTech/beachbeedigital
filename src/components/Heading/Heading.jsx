import React from "react";
import styles from "./Heading.module.css";

import bee from "../../assets/images/logo/bee.svg";

export default function Heading({ title, white }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <img src={bee} alt="" className={styles.img} />
    </div>
  );
}
