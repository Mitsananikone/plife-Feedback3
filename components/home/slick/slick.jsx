/** @format */

import React from "react";
import styles from "./slick.module.css";

const Slick = () => {
    return (
      <div className={styles.slickContainer}>
        <div className={styles.slickInside}>
          <h1 className={styles.slickH1}>
            <span className={styles.slickSpan}>UNIQUE</span>
            <div className={styles.message}>
              <div className={styles.wordContainer}>
                <div className={styles.word1}>LIFE</div>
              </div>
              <div className={styles.wordContainer}>
                <div className={styles.word2}>PRICE</div>
              </div>
              <div className={styles.wordContainer}>
                <div className={styles.word3}>EXPERIENCE</div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    );
  };
  
  export default Slick;
  