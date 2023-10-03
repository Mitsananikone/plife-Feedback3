/** @format */

import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <span>© 2023 PHOENIQUELIFE.  All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
