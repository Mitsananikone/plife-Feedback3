/** @format */

import Link from "next/link";
import styles from "./cosmeticSurgeryCard.module.css";

export default function CosmeticSurgeryCard({ onClose, onProcedureSelect, selectedProcedure }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.surgeryNavContainer}>
        <div className={styles.surgeryNav}>
          <h1 className={styles.cosmeticText}>COSMETIC</h1>
          <h1 className={styles.cosmeticText}>SURGERY</h1>
          <p className={styles.headerText}>
            Explore our popular beauty treatment offers and choose your products
          </p>
          <div className="mt-12 space-y-1 text-white ">
            <h1 className={`${styles.navItem} ${selectedProcedure === "breastImplant" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("breastImplant")}>BREAST IMPLANT</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "breastLift" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("breastLift")}>BREAST LIFT</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "breastReduction" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("breastReduction")}>BREAST REDUCTION</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "faceLift" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("faceLift")}>FACE LIFT</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "liposuction" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("liposuction")}>LIPOSUCTION</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "trans" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("trans")}>GENDER TRANSITION</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "rhinoplasty" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("rhinoplasty")}>RHINOPLASTY</h1>
            <h1 className={`${styles.navItem} ${selectedProcedure === "tummyTuck" ? styles.selected : ""}`} 
        onClick={() => onProcedureSelect("tummyTuck")}>TUMMY TUCK</h1>
          </div>
          <Link href="/contacts/contactsPage" passHref>
            <button className={styles.seeMoreButton}>INQUIRE</button>
          </Link>
        </div>

        <div className={styles.scrolling}></div>
      </div>
    </div>
  );
}
