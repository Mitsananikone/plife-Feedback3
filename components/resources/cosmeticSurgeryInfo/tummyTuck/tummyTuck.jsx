/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const TummyTuckInfo = React.forwardRef((props, ref) => {
  TummyTuckInfo.displayName = "TummyTuckInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const tummyTuckPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = tummyTuckPopupRef.current
    ? tummyTuckPopupRef.current.offsetHeight
    : 0;

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

    if (tummyTuckPopupRef.current) {
      tummyTuckPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tummyTuckPopupRef.current) {
        tummyTuckPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [tummyTuckPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={tummyTuckPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}>Tummy Tuck Surgery</h2>

              <span className="text-m flex-wrap">
                <br />A tummy tuck, medically known as abdominoplasty, is a surgical procedure aimed at removing excess skin and fat from the middle and lower abdomen and tightening the muscles of the abdominal wall. This surgery can greatly reduce the appearance of a protruding abdomen, offering a firmer and smoother profile.



              </span>
              <br />
              <span className="text-m flex-wrap">
              Tummy tucks can be especially beneficial for those who have experienced significant weight loss or post-pregnancy changes, restoring a more toned and contoured appearance to the abdomen.



              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                   imageUrl="/images/info/lipo1.png"
                   description="The surgery can remove loose or sagging skin and repair weakened abdominal muscles."


                />
                <InfoCard
                   imageUrl="/images/info/lipo2.png"
                   description="It can be customized to meet individual needs, including mini or full abdominoplasty."




                />
                <InfoCard
                   imageUrl="/images/info/lipo3.png"
                   description="Post-surgery, patients often report heightened self-esteem and confidence in their body image."




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
            <div ref={refsArray[1]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
              The Appeal of Tummy Tucks
              </h2>

              <span className="text-m flex-wrap">
              Whether due to genetics, aging, pregnancy, or significant weight fluctuations, the abdomen can sometimes resist toning exercises and dieting. A tummy tuck can address these issues, providing long-lasting and transformative results.




              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
              Best Candidates for a Tummy Tuck
              </h2>

              <span className="text-m flex-wrap">
              Ideal candidates for a tummy tuck are individuals in good health who have excess skin or fat deposits in the abdominal area that do not respond to diet and exercise. It&apos;s crucial for patients to have realistic expectations and understand the surgery&apos;s scope and limitations.


</span>
        
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              The specific procedures vary based on individual needs. They can include mastectomy, breast augmentation, vaginoplasty, phalloplasty, and facial feminization or masculinization surgeries, among others.
  <br />
  <br />
  <span className="text-m flex-wrap">
  The surgery typically takes 2-5 hours, under general anesthesia. An incision is made across the lower abdomen, and the surgeon removes excess skin, tightens the abdominal muscles, and repositions the navel if necessary. The method and incision length can vary based on individual needs.
  <br />
  <br />
  <ul className="custom-bullet-list">
    <li>Full abdominoplasty: For patients who need muscle repair and skin removal.</li>
    <li>Mini abdominoplasty: Targets only the area below the navel without muscle repair.</li>
    <li>Extended abdominoplasty: Addresses the abdomen and the flanks or sides.</li>
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
            <div ref={refsArray[2]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                {" "}
                Recovery and Results{" "}
              </h2>

              <span className="text-m flex-wrap">
              Recovery time varies, but most patients can resume normal activities after 2-4 weeks. Initial results are evident immediately, but the final contour will be visible after several months as swelling subsides. Scarring will fade over time, becoming less noticeable.



              </span>

              <h2 className={popupStyles.infoTitle}>
              Benefits of a Tummy Tuck
              </h2>
              <span>
              The most significant benefits include a flatter, firmer abdominal contour, enhanced self-image, and the ability to wear a wider variety of clothing styles with confidence.




              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
              As with any surgical procedure, there are risks involved, including infection, poor scarring, complications related to anesthesia, and the potential need for revision surgery. Discussing these risks with your surgeon during the consultation is essential.




              </span>
            </div>
          </CSSTransition>

          <CSSTransition
            in={showFourthSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[3]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                Schedule a Consultation
              </h2>

              <span className="text-m flex-wrap">
              Considering a tummy tuck? It&apos;s essential to consult with a board-certified plastic surgeon to gain a thorough understanding of the procedure, its benefits, and to determine if it&apos;s the right choice for you.




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

export default TummyTuckInfo;
