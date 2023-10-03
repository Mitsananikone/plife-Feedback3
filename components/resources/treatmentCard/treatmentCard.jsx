/** @format */

import React, { useState, useEffect } from "react";
import styles from "./treatmentCard.module.css";

import Head from "next/head";
import { CldImage } from "next-cloudinary";

const TreatmentCard = ({
  imageUrl,
  description,
  style,
  onClick,
  className,
}) => {
  const [ImageWidth, setImageWidth] = useState(550);
  const [ImageHeight, setImageHeight] = useState(400);
  const [windowWidth, setWindowWidth] = useState(0);

  
  useEffect(() => {
    // Set the initial dimensions based on current window width
    updateDimensions();

    // Add the event listener to window resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the listener when the component is unmounted
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    if (window.innerWidth < 320) {
      setImageWidth(400);
      setImageHeight(300);
    } else if (window.innerWidth < 479) {
      setImageWidth(400);
      setImageHeight(300);
    } else if (window.innerWidth < 767) {
      setImageWidth(550);
      setImageHeight(400);
    } else if (window.innerWidth < 991) {
      setImageWidth(460);
      setImageHeight(300);
    } else {
      // You can set other values for larger screens if needed
      setImageWidth(600); // Example value, adjust as necessary
      setImageHeight(450); // Example value, adjust as necessary
    }
  };
  return (
    <div style={style} className={styles.tCard}>
     <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>
      <div onClick={onClick}>
        <div className={styles.imgContainer}>
        <CldImage
cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} 
      width={ImageWidth} 
      height={ImageHeight}
      src={imageUrl} />
        </div>
        <div className={styles.tCardTitle}>
          <p>{description}</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TreatmentCard;
