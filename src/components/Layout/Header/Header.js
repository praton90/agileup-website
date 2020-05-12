import React from "react";

import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

const header = (props) => {
  return (
    <header>
      <div className={styles.Header}>
        <h1>AGILEUP Blog</h1>
        <p>
          Here you can find some really cool articles about Agile Metodology.
        </p>
      </div>
      <Nav />
    </header>
  );
};

export default header;
