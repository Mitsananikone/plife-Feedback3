/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const BreastLiftInfo = React.forwardRef((props, ref) => {
  BreastLiftInfo.displayName = 'BreastLiftInfo';
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const breastLiftPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = breastLiftPopupRef.current ? breastLiftPopupRef.current.offsetHeight : 0;

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

    if (breastLiftPopupRef.current) {
      breastLiftPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (breastLiftPopupRef.current) {
        breastLiftPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [breastLiftPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  
    return (
      <div className={popupStyles.popupContainer} ref={breastLiftPopupRef}>
      <div className="flex w-full">
      <div className={popupStyles.popup_Info} style={{wordWrap: 'break-word'}}>
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
                Cosmetic Surgery Breast Lift
              </h2>

              <span >
                <br />
                A cosmetic surgery breast lift, also known as mastopexy, is performed to elevate sagging breasts to a more youthful position. This procedure involves the removal of excess skin and the reshaping of the breast tissue. Breasts that have lost volume over time can be simultaneously augmented using implants. The goal of a breast lift is to give the breasts a firmer, more uplifted appearance.
              </span>
              <br />
              <span className="text-m flex-wrap">
                For many women, the combination of aging, gravity, childbirth, and breastfeeding can cause the breasts to sag and lose their youthful shape. A breast lift can rejuvenate the figure by achieving a more uplifted and firm breast contour.
              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                  imageUrl="/images/info/bLift1.png"
                  description="
                    The process involves removing excess skin and reshaping the breast tissue to raise the breasts."
                />
                <InfoCard
                  imageUrl="/images/info/bLift2.png"
                  description="
                    The nipples and areolas can be repositioned to enhance the overall appearance."
                />
                <InfoCard
                  imageUrl="/images/info/bLift3.png"
                  description="
                    After surgery, the breasts will appear more uplifted and firmer. Scars, although permanent, will fade over time."
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
                The Appeal of Breast Lifts
              </h2>

              <span className="text-m flex-wrap">
                The decision to have a breast lift stems from the desire to restore a youthful and perky breast shape. The procedure can dramatically improve self-confidence and body image by restoring the natural contours of the breasts.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                Best Candidates for a Breast Lift
              </h2>

              <span className="text-m flex-wrap">
                Ideal candidates for breast lifts are women who have experienced changes in breast shape due to aging, weight fluctuations, childbirth, and breastfeeding. It&apos;s crucial that they are in good health, understand the procedure fully, and have realistic expectations about the results.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              <span className="text-m flex-wrap">
                The surgery typically takes 2-3 hours and can be done under general or local anesthesia. The technique chosen by the surgeon will depend on the patient&apos;s breast size, degree of sagging, and individual goals. Common incision patterns include:
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>Around the areola (periareolar incision)</li>
                  <li>Around the areola and vertically down to the breast crease (lollipop incision)</li>
                  <li>Around the areola, vertically down to the breast crease and then horizontally along the breast crease (anchor or inverted-T incision)</li>
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
                Recovery from a breast lift varies from patient to patient, but most can expect mild discomfort, swelling, and bruising initially. Results are immediately visible, and scars will fade over time, becoming less noticeable.
              </span>

              <h2 className={popupStyles.infoTitle}>
                Benefits of a Breast Lift
              </h2>
              <span>
                Elevating and reshaping sagging breasts, enhancing breast symmetry, resizing and repositioning the areolas, and restoring a more youthful breast contour are some of the many benefits of a breast lift.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                Potential Risks
              </h2>

              <span className="text-m flex-wrap">
                As with any surgery, there are risks involved, including infection, poor scarring, asymmetry, and changes in nipple sensation. It&apos;s crucial to discuss these risks with your surgeon during the consultation.
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
                Are you considering a breast lift? It&apos;s important to consult with a board-certified plastic surgeon to understand your options and determine the best approach for you.
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

export default BreastLiftInfo;