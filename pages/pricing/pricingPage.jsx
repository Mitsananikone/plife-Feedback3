/** @format */

import React, { useState, useEffect } from "react";
import styles from "@/pages/pricing/pricingPage.module.css";
import Image from 'next/image';
import Head from 'next/head';
import { CldImage } from "next-cloudinary";


function SurgeryRow1(props) {
  return (
    <tr>
      <td>{props.data.procedure}</td>
      <td>{props.data.costDE}</td>
      {/* <td>{props.data.costBK}</td> */}
    </tr>
  );
}

function SurgeryRow2(props) {
    return (
      <tr>
        <td>{props.data.procedures[0]}</td>
        <td>{props.data.procedures[1]}</td>
        <td>{props.data.costDE}</td>
        {/* <td>{props.data.costBK}</td> */}
      </tr>
    );
  }

  function SurgeryRow3(props) {
    return (
      <tr>
        <td>{props.data.procedures[0]}</td>
        <td>{props.data.procedures[1]}</td>
        <td>{props.data.procedures[2]}</td>
        <td>{props.data.costDE}</td>
        {/* <td>{props.data.costBK}</td> */}
      </tr>
    );
  }

const PricingPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
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


  const package1 = [
    {
      procedure: "Breast augmentation",
      costDE: "€9,000.00",
      // costBK: "€4,800.00",
    },
    {
      procedure: "Liposuction",
      costDE: "€6,000.00",
      // costBK: "€3,000.00",
    },
    {
      procedure: "Rhinoplasty",
      costDE: "€7,200.00",
      // costBK: "€2,800.00",
    },
    {
      procedure: "Blepharoplasty",
      costDE: "€3,600.00",
      // costBK: "€820.00",
    },
    {
      procedure: "Abdominoplasty",
      costDE: "€9,600.00",
      // costBK: "€4,100.00",
    },
    {
      procedure: "Facelift",
      costDE: "€11,400.00",
      // costBK: "€4,200.00",
    },
    {
      procedure: "Ear pinning",
      costDE: "€2,700.00",
      // costBK: "€1,050.00",
    },
    {
      procedure: "Buttock augmentation",
      costDE: "€9,000.00",
      // costBK: "€4,800.00",
    },
    {
      procedure: "Chin augmentation",
      costDE: "€4,800.00",
      // costBK: "€1,800.00",
    },
  ];

  const package2 = [
    {
      procedures: ["Breast augmentation", "Liposuction"],
      costDE: "€15,000.00",
      // costBK: "€7,800.00"
    },
    {
      procedures: ["Rhinoplasty", "Blepharoplasty"],
      costDE: "€10,800.00",
      // costBK: "€3,620.00"
    },
    {
        procedures: ["Liposuction", "Abdominoplasty"],
        costDE: "€15,600.00",
        // costBK: "€7,100.00"
      },
      {
        procedures: ["Breast augmentation", "Facelift"],
        costDE: "€20,400.00",
        // costBK: "€9,000.00"
      },
      {
        procedures: ["Liposuction", "Buttock augmentation"],
        costDE: "€15,000.00",
        // costBK: "€7,800.00"
      },
   
  ];

  const package3 = [
    {
      procedures: ["Breast augmentation", "Liposuction", "Rhinoplasty"],
      costDE: "€22,200.00",
      // costBK: "€10,600.00"
    },
    {
      procedures: ["Rhinoplasty", "Blepharoplasty", "Breast augmentation"],
      costDE: "€19,800.00",
      // costBK: "€8,420.00"
    },
    {
        procedures: ["Liposuction", "Abdominoplasty", "Breast augmentation"],
        costDE: "€24,600.00",
        // costBK: "€11,900.00"
      },
      {
        procedures: ["Breast augmentation", "Liposuction", "Buttock augmentation"],
        costDE: "€24,000.00",
        costBK: "€12,600.00"
      },
      {
        procedures: ["Rhinoplasty", "Blepharoplasty", "Facelift"],
        costDE: "€22,200.00",
        // costBK: "€7,820.00"
      },
    
  ];

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.bannerContainer}>
       <CldImage
cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} 
      width={windowWidth} 
      height={computedHeight}
      src="pricing/pricingBanner.webp" />
        <h1 className={styles.pricingTitle}>Package Pricing</h1>
      </div>

      <div className={styles.package} id={styles.package1}>
        <h2>Package 1</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Procedure</th>
              <th>Average Cost in DE</th>
              {/* <th>Average Cost in BK</th> */}
            </tr>
          </thead>
          <tbody>
            {package1.map((surgery, index) => (
              <SurgeryRow1 key={index} data={surgery} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.package} id={styles.package2}>
        <h2>Package 2</h2>
        <table border="1">
      <thead>
        <tr>
          <th>Procedure 1</th>
          <th>Procedure 2</th>
          <th>Average Cost in DE</th>
          {/* <th>Av. Co. BK</th> */}
        </tr>
      </thead>
      <tbody>
        {package2.map((surgeryCombo, index) => (
          <SurgeryRow2 key={index} data={surgeryCombo} />
        ))}
      </tbody>
    </table>
      </div>
      <div className={styles.package} id={styles.package3}>
        <h2>Package 3</h2>
        <table border="1">
      <thead>
        <tr>
          <th>Procedure 1</th>
          <th>Procedure 2</th>
          <th>Procedure 3</th>
          <th>Average Cost in DE</th>
          {/* <th>Av. Co. BK</th> */}
        </tr>
      </thead>
      <tbody>
        {package3.map((surgeryTriple, index) => (
          <SurgeryRow3 key={index} data={surgeryTriple} />
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default PricingPage;
