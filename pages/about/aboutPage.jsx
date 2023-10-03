/** @format */

import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import styles from "./about.module.css";
import withTransition from "@/components/hoc/withTransition";
import Head from "next/head";
import { CldImage } from "next-cloudinary";

function AboutPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  const cloudinaryLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/phoeniquelife/image/upload/w_${width},q_${quality}/${src}`;
  };

  const fitText = () => {
    const container = containerRef.current;
    if (!container) return;

    const fitTitle = (titleRef, text) => {
      const svgNS = "http://www.w3.org/2000/svg";
      const textElement = titleRef.current;

      // Set the SVG text content
      textElement.textContent = text;

      // Create a temporary path to measure the length
      const path = document.createElementNS(svgNS, "path");
      path.setAttributeNS(null, "d", `M0,0h${container.offsetWidth}`);
      container.appendChild(path);

      // Adjust the text path to fit the container width
      textElement.setAttributeNS(null, "lengthAdjust", "spacingAndGlyphs");
      textElement.setAttributeNS(null, "textLength", container.offsetWidth);

      // Remove the temporary path
      container.removeChild(path);
    };

    fitTitle(title1Ref, "UNIQUE BEAUTY SURGERY");
    fitTitle(title2Ref, "EXPERIENCE IN THAILAND");
  };

  useEffect(() => {
    fitText();
    window.addEventListener("resize", fitText);

    return () => window.removeEventListener("resize", fitText);
  }, []);


  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);


  const computedHeight = (windowWidth) * 0.75;

  const imageUrl = cloudinaryLoader({
    src: "about/aboutBackground.webp",
    width: windowWidth,
    quality: 80 // you can define the quality parameter as per your requirement
  });




  return (
    <div className="background">
       <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>

      <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src="about/aboutBackground.webp"
              alt="About Background"
       />

      {/* <div className={styles.blurredBackground}></div> */}
      <div className={styles.textContainerOuter}>
        <div className={styles.textContainer}>
          <div className={styles.textContainerBlock} ref={containerRef}>
            <svg width="100%" height="4em">
              <text
                ref={title1Ref}
                className={styles.textStretch}
                y="1em"
              ></text>
            </svg>
            <svg width="100%" height="4em">
              <text
                ref={title2Ref}
                className={styles.textStretch}
                y="1em"
              ></text>
            </svg>

            {/* <h2 className="bounds">UNIQUE BEAUTY SURGERY</h2>
          <h2 className="bounds">EXPERIENCE IN THAILAND</h2> */}
            <p>
              Welcome to PHEONIQUE.LIFE, where we specialize in providing the
              ultimate cosmetic surgery holiday experience. Our experienced team
              combined with top surgeons and specialists will ensure that you
              receive the highest level of care and achieve your desired
              results. From breast augmentation to facelifts, we offer a wide
              range of procedures at an affordable cost. With the added bonus of
              a holiday destination, you can relax and rejuvenate both inside
              and out. Let us help you enhance your natural beauty and boost
              your confidence. Contact us today to start planning your cosmetic
              surgery holiday!
            </p>

            <Link href="/contacts/contactsPage">
              <button className={styles.submitButton}>REQUEST QUOTE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTransition(AboutPage);
