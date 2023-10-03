/** @format */

import React from "react";
import styles from "./animInfoCard.module.css";

const AnimInfoCard = ({ backgroundImage, title, body }) => (
  <div className={styles.boxSizingReset}>
    {" "}
    {/* Reset box-sizing for this component */}
    <div className={styles.bodyStyle}>
      {" "}
      {/* You might want this to be the main app container, not inside each card */}
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          minHeight: "200px", // You can adjust this value as needed
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title || "Default Title"}</h2>
          <p className={styles.cardBody}>
            {body ||
              "Default body text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Default props
AnimInfoCard.defaultProps = {
  backgroundImage: "/path/to/default-image.webp",
  title: "Default Title",
  body: "Default body text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
};

export default AnimInfoCard;
