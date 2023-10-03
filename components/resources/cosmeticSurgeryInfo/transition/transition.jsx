/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const TransitionInfo = React.forwardRef((props, ref) => {
  TransitionInfo.displayName = "TransitionInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const transitionPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = transitionPopupRef.current
    ? transitionPopupRef.current.offsetHeight
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

    if (transitionPopupRef.current) {
      transitionPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (transitionPopupRef.current) {
        transitionPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [transitionPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={transitionPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}>  Gender Affirming Surgery</h2>

              <span className="text-m flex-wrap">
                <br />Gender affirming surgery, also known as gender confirmation or transition surgery, is a range of medical procedures that transgender, non-binary, and gender-diverse individuals might undergo to align their physical appearance with their gender identity. These surgeries can be a significant step in a person&apos;s gender transition journey.


              </span>
              <br />
              <span className="text-m flex-wrap">
              These surgeries can be vital for the well-being and mental health of transgender and gender-diverse individuals, providing relief from gender dysphoria and enhancing overall life satisfaction.


              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                   imageUrl="/images/info/lipo1.png"
                   description="The procedures can be both top surgeries (chest/breast surgeries) and bottom surgeries (genital surgeries)."

                />
                <InfoCard
                   imageUrl="/images/info/lipo2.png"
                   description="Surgery can significantly enhance self-esteem and body-image congruence."



                />
                <InfoCard
                   imageUrl="/images/info/lipo3.png"
                   description="The post-operative phase often marks a transformative stage in one's gender journey."



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
              The Importance of Gender Affirming Surgery
              </h2>

              <span className="text-m flex-wrap">
              Beyond the physical transformation, gender affirming surgeries play a pivotal role in alleviating gender dysphoria, enabling individuals to lead more fulfilling, authentic lives. Such procedures, for many, signify their inner and outer selves finally aligning.



              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
              Best Candidates for Gender Affirming Surgery
              </h2>

              <span className="text-m flex-wrap">
              Ideal candidates for these procedures have been diagnosed with gender dysphoria, have lived and identified as their true gender for a specific period, and have received counseling or therapy. They should be in good physical and mental health and hold realistic expectations about the results.


</span>
        
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              The specific procedures vary based on individual needs. They can include mastectomy, breast augmentation, vaginoplasty, phalloplasty, and facial feminization or masculinization surgeries, among others.
  <br />
  <br />
  <span className="text-m flex-wrap">
  The specific procedures vary based on individual needs. They can include mastectomy, breast augmentation, vaginoplasty, phalloplasty, and facial feminization or masculinization surgeries, among others.
  <br />
  <br />
  <ul className="custom-bullet-list">
    <li>Mastectomy: Removal of breast tissue to create a male chest contour.</li>
    <li>Vaginoplasty: Construction or reconstruction of the vagina.</li>
    <li>Phalloplasty: Construction of a neophallus or penis.</li>
    <li>Facial surgeries: Procedures to make facial features more typically masculine or feminine.</li>
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
              Recovery durations vary based on the surgeries performed. Most patients will need to follow specific post-operative care routines, such as dilation for vaginoplasty patients. While some results are immediately visible, others, like scarring, will improve over time.


              </span>

              <h2 className={popupStyles.infoTitle}>
              Benefits of Gender Affirming Surgery
              </h2>
              <span>
              The most significant benefit is the alignment of one&apos;s physical body with their gender identity. This can lead to an immense relief from gender dysphoria, heightened self-confidence, and a greater sense of well-being.



              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
              As with any surgical procedure, there are inherent risks such as bleeding, infection, complications from anesthesia, unsatisfactory results, and complications specific to the type of surgery. A thorough consultation with a specialized surgeon is crucial to understand all potential risks.



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
              Are you considering gender affirming surgery? A consultation with a board-certified surgeon specializing in gender confirmation procedures is vital to gain comprehensive insight into the surgery, its benefits, and its potential impact on your journey.



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

export default TransitionInfo;
