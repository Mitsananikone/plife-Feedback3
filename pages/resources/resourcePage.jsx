/** @format */

import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/resources/treatmentCard/treatmentCard";
import styles from "./resourcePage.module.css";
import PopupAllSurgeries from "@/pages/resources/popUp/popupResources";
import Image from 'next/image';
import Head from 'next/head';
import { CldImage } from "next-cloudinary";

export default function ResourcePage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // const cloudinaryLoader = ({ src, width, quality }) => {
  //   return `https://res.cloudinary.com/phoeniquelife/image/upload/w_${width},q_${quality}/${src}`;
  // };

  
  const handleClick = (procedureType) => {
    console.log("Clicked on:", procedureType);
    setSelectedProcedure(procedureType);
    setIsPopupVisible(true);
};

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


  return (
    <div className={styles.mainContainer}>
       <div className={styles.resourceContainer}>
        <div className={styles.bannerContainer}>
 
        <CldImage
cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} 
      width={windowWidth} 
      height={computedHeight}
      src="resources/resourceBanner.webp" />
        <h1 className={styles.resourceTitle}>Surgical Procedures</h1>
      </div>
    <div className={styles.procedureContainer}>
      <div className={styles.bothGroups}>
        <div className={styles.tCardGroup1}>
          <TreatmentCard
            onClick={() => handleClick("breastImplant")}
            imageUrl="resources/breastImplant.webp"
            description="BREAST IMPLANT"
   
          />
          <TreatmentCard
             onClick={() => handleClick("breastLift")}
            imageUrl="resources/breastLift.webp"
            description="BREAST LIFT"
        
          />
          <TreatmentCard
             onClick={() => handleClick("breastReduction")}
            imageUrl="/resources/breastReduction.webp"
            description="BREAST REDUCTION"
            
          />
          <TreatmentCard
             onClick={() => handleClick("faceLift")}
            imageUrl="/resources/faceLift.webp"
            description="FACE LIFT"
           
          />
        </div>
        <div className={styles.tCardGroup2}>
          <TreatmentCard
             onClick={() => handleClick("liposuction")}
            imageUrl="/resources/liposuction.webp"
            description="LIPOSUCTION"
          
          />
          <TreatmentCard
             onClick={() => handleClick("trans")}
            imageUrl="/resources/trans.webp"
            description="GENDER TRANSITION"
    
          />
          <TreatmentCard
             onClick={() => handleClick("rhinoplasty")}
            imageUrl="/resources/rhinoplasty.webp"
            description="RHINOPLASTY"
        
          />
          <TreatmentCard
             onClick={() => handleClick("tummyTuck")}
            imageUrl="/resources/tummyTuck.webp"
            description="TUMMY TUCK"
     
          />
        </div>
      </div>


      <PopupAllSurgeries
    className={isPopupVisible ? "popup visible" : "popup"}
    isPopupVisible={isPopupVisible}
    onClose={() => setIsPopupVisible(false)}
    selectedProcedure={selectedProcedure}
/>
    </div>
    </div>
    </div>
  );
}
