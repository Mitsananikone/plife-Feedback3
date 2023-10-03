/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const BreastReductionInfo = React.forwardRef((props, ref) => {
  BreastReductionInfo.displayName = 'BreastReductionInfo';
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const breastReductionPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = breastReductionPopupRef.current ? breastReductionPopupRef.current.offsetHeight : 0;

  useEffect(() => {
    const handleScroll = () => {
      refsArray.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isPartiallyVisible = rect.top < popupHeight && rect.bottom > 0;

          switch (index) {
            case 0:
              setShowFirstSection(isPartiallyVisible);
              break;
            case 1:
              setShowSecondSection(isPartiallyVisible);
              break;
            case 2:
              setShowThirdSection(isPartiallyVisible);
              break;
            case 3:
              setShowFourthSection(isPartiallyVisible);
              break;
            default:
              break;
          }
        }
      });
    };

    if (breastReductionPopupRef.current) {
      breastReductionPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (breastReductionPopupRef.current) {
        breastReductionPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [breastReductionPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={breastReductionPopupRef}>
    <div className="flex w-full">
      <div className={popupStyles.popup_Info}>
        <CSSTransition
          in={showFirstSection}
          timeout={1000}
          classNames="fade"
          unmountOnExit={false}
        >
          <div 
            ref={refsArray[0]} 
            className={popupStyles.motion}
          >
  <h2 className={popupStyles.infoTitle}>
        Cosmetic Surgery Breast Reduction
      </h2>

      <span className="text-m flex-wrap">
        <br />
        Cosmetic surgery for breast reduction, technically known as reduction mammaplasty, is a procedure to remove excess breast fat, glandular tissue, and skin. This brings comfort and proportion to a woman&apos;s body, alleviating the discomfort associated with overly large breasts.
      </span>
      <br />
      <span className="text-m flex-wrap">
        Disproportionately large breasts can lead to both health and emotional challenges. They can create self-image concerns and physical pain. Through breast reduction, one can achieve a breast size that aligns with their body structure.
      </span>

      <div className={styles.iCardContainer}>
        <InfoCard
          imageUrl="/images/info/reduction1.png"
          description="
            The procedure aims at achieving a proportional breast size, enhancing overall body contour."
        />
        <InfoCard
          imageUrl="/images/info/reduction2.png"
          description="
            Besides aesthetic enhancement, it can significantly improve physical ailments like neck or back pain."
        />
        <InfoCard
          imageUrl="/images/info/reduction3.png"
          description="
            Post-surgery, patients often report immediate relief and a surge in self-confidence."
        />
      </div>
      </div>
          </CSSTransition>

          <CSSTransition
            in={showSecondSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div 
              ref={refsArray[1]} 
              className={popupStyles.motion}
            >
              <h2 className={popupStyles.infoTitle}>
              The Appeal of Breast Reductions
      </h2>

      <span className="text-m flex-wrap">
        Opting for a breast reduction is often a health-focused decision. Overly large breasts can strain the back and shoulders, leading to chronic pain. Moreover, it aligns the body&apos;s proportions, boosting one&apos;s self-confidence and body image.
      </span>
      <br />

      <h2 className={popupStyles.infoTitle}>
        Best Candidates for a Breast Reduction
      </h2>

      <span className="text-m flex-wrap">
        Ideal candidates for breast reductions are those who face physical discomfort or emotional distress due to their large breast size. It&apos;s vital for them to be in good health, have a clear understanding of the procedure, and hold realistic expectations about the results.
      </span>
      <br />

      <h2 className={popupStyles.infoTitle}>
        The Surgical Procedure
      </h2>

      <span className="text-m flex-wrap">
        The surgery takes around 2-3 hours and can be done under general anesthesia. The surgeon removes excess fat, tissue, and skin, and repositions the nipple if necessary. Incisions can vary, and the best method will depend on individual cases and the surgeon&apos;s recommendation.
      <br />
      <br />
      <ul className="custom-bullet-list">
  <li>Encircling the areola (periareolar incision)</li>
  <li>Encircling the areola and vertically down to the breast fold (vertical or lollipop incision)</li>
  <li>Encircling the areola, vertically down to the breast fold, and then horizontally along the fold (inverted-T or anchor incision)</li>
</ul>
</span>
            </div>
          </CSSTransition>

          <CSSTransition
  in={showThirdSection}
  timeout={1000}
  classNames="fade"
  unmountOnExit={false}
>
  <div 
    ref={refsArray[2]} 
    className={popupStyles.motion}
  >
    <h2 className={popupStyles.infoTitle}> Recovery and Results </h2>

    <span className="text-m flex-wrap">
      Recovery from a breast reduction varies from patient to patient, but most can expect mild discomfort, swelling, and bruising initially. The alleviation of back and neck pain can be felt almost immediately for many, and scars, although present, will fade over time, becoming less noticeable.
    </span>

    <h2 className={popupStyles.infoTitle}>
      Benefits of a Breast Reduction
    </h2>
    <span>
      Alleviating physical discomfort, enhancing breast symmetry, achieving a proportionate breast size to the body, and improving the ability to engage in physical activities are some of the primary benefits of a breast reduction.
    </span>
    <br />

    <h2 className={popupStyles.infoTitle}>
      Potential Risks
    </h2>

    <span className="text-m flex-wrap">
      As with any surgery, there are risks involved, including infection, poor scarring, asymmetry, changes in nipple or breast sensation, and complications related to anesthesia. It&apos;s essential to discuss these risks with your surgeon during the consultation.
    </span>
  </div>
</CSSTransition>

<CSSTransition
  in={showFourthSection}
  timeout={1000}
  classNames="fade"
  unmountOnExit={false}
>
  <div 
    ref={refsArray[3]} 
    className={popupStyles.motion}
  >
    <h2 className={popupStyles.infoTitle}>
      Schedule a Consultation
    </h2>

    <span className="text-m flex-wrap">
      Are you considering a breast reduction? It&apos;s crucial to consult with a board-certified plastic surgeon to understand the procedure, its benefits, and determine if it&apos;s the right choice for you.
    </span>
    <br />

    {/* <ConsultationForm /> */}
  </div>
</CSSTransition>
</div>
      </div>
    </div>
      );
  });

  export default BreastReductionInfo;