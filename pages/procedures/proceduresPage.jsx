/** @format */

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; // Import the Link component
import styles from "./proceduresPage.module.css";
import { motion } from "framer-motion";

import Head from "next/head";
import { CldImage } from "next-cloudinary";

function ProceduresPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

    const cloudinaryLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/phoeniquelife/image/upload/w_${width},q_${quality}/${src}`;
  };

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const computedHeight = windowWidth * 0.75;

  const fadeIn = {
    hidden: { opacity: 0.7 }, // Words are dimmed
    visible: { opacity: 1, color: "white", transition: { duration: 1500 } }, // Words are highlighted
  };

  const [highlightRow, setHighlightRow] = useState(0);

  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setHighlightRow((prevRow) => (prevRow + 1) % 4);
    }, 3000);

    return () => clearInterval(highlightInterval);
  }, []);

  return (
    <div className="background">
      <div className={styles.backgroundImage}></div>
      <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src="procedures/proceduresBackground.webp"
              alt="Procedures Background"
       />
    

      <div className={styles.procedureComponent}>
        <div ref={containerRef} className={styles.proceduresHighlight}>
          {" "}
          {/* 60% width */}
          <p className={styles.headerText}>
            You don't pay for your beauty surgery - You pay for your unique
            experience
          </p>
          <div className={styles.mainTitle}>
            <h1 ref={titleRef}>OUR PROCEDURES</h1>
          </div>
          <motion.div
            variants={containerRef}
            initial="hidden"
            animate="show"
            className={styles.highlightText}
          >
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              BEAUTY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 0 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              SURGERY
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              GENDER
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 1 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              TRANSITIONING
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              AESTHETIC
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 2 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              NON-SURGICAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className={styles.text_left}
            >
              DENTAL
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={highlightRow === 3 ? "visible" : "hidden"}
              className={styles.text_right}
            >
              PROCEDURES
            </motion.p>
          </motion.div>
          <div className={styles.detailsButtonContainer}>
            <Link href="/resources/resourcePage" passHref>
              <button className={styles.detailsButton}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProceduresPage;