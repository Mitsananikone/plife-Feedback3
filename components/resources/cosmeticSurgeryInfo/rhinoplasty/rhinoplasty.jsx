/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const RhinoplastyInfo = React.forwardRef((props, ref) => {
  RhinoplastyInfo.displayName = "RhinoplastyInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const rhinoplastyPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = rhinoplastyPopupRef.current
    ? rhinoplastyPopupRef.current.offsetHeight
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

    if (rhinoplastyPopupRef.current) {
      rhinoplastyPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (rhinoplastyPopupRef.current) {
        rhinoplastyPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [rhinoplastyPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={rhinoplastyPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}> Cosmetic Surgery Rhinoplasty</h2>

              <span className="text-m flex-wrap">
                <br />Rhinoplasty, commonly known as a nose job, is a surgical procedure that reshapes or resizes the nose. It can correct a variety of concerns including a visible bump, a droopy or protruding tip, a nose that&apos;s too large or wide, or any asymmetry.

              </span>
              <br />
              <span className="text-m flex-wrap">
              Whether due to aesthetic or functional reasons, such as breathing issues, rhinoplasty can provide significant improvements. It aims to create a natural-looking nose that harmonizes with the rest of the face.

              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                   imageUrl="/images/info/lipo1.png"
                   description="The procedure can be both cosmetic and functional, addressing breathing issues or nasal trauma."

                />
                <InfoCard
                   imageUrl="/images/info/lipo2.png"
                   description="It's one of the most transformative facial surgeries, significantly enhancing one's profile."


                />
                <InfoCard
                   imageUrl="/images/info/lipo3.png"
                   description="Post-surgery, patients often report increased confidence and satisfaction with their facial appearance."


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
                The Appeal of Rhinoplasty
              </h2>

              <span className="text-m flex-wrap">
              A well-done rhinoplasty can significantly improve the balance and proportions of the face. Given that the nose is the central feature, even a minor alteration can have a major impact on one&apos;s appearance. The procedure can also address structural issues, leading to improved breathing and health.


              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
              Best Candidates for Rhinoplasty
              </h2>

              <span className="text-m flex-wrap">
              Ideal candidates for rhinoplasty are individuals who are looking to improve the appearance and/or function of their nose. It&apos;s essential for candidates to be in good health, not smoke, and have realistic expectations about the results.

</span>
        
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              <span className="text-m flex-wrap">
              The surgery can be open or closed. In an open rhinoplasty, an incision is made across the columella (the strip of tissue between the nostrils), while in a closed one, incisions are hidden inside the nose. Cartilage might be reshaped, removed, or even added (using cartilage from other parts of the body or synthetic materials).
  <br />
  <br />
  <ul className="custom-bullet-list">
    <li>Open Rhinoplasty: Offers more visibility and control for the surgeon.</li>
    <li>Closed Rhinoplasty: Has no external scars and often a quicker recovery.</li>
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
              Post-surgery, patients typically wear a nasal splint for about a week. Swelling and bruising around the eyes are common, but these effects gradually diminish. While some results can be seen once the splint is removed, the final outcome, especially the subtle refinements, may take up to a year or longer to fully develop.

              </span>

              <h2 className={popupStyles.infoTitle}>
              Benefits of Rhinoplasty
              </h2>
              <span>
              Rhinoplasty can enhance facial harmony, boost self-confidence, and, in cases of functional rhinoplasty, significantly improve breathing functionality.


              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
              As with any surgical procedure, rhinoplasty comes with risks. These include bleeding, infection, unsatisfactory results, breathing difficulties, and anesthesia complications. As always, it&apos;s essential to discuss potential risks with a certified surgeon during consultation.


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
              Considering rhinoplasty? Consulting with a board-certified plastic surgeon is crucial to understand the procedure thoroughly, its benefits, and to determine if it aligns with your aesthetic goals.


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

export default RhinoplastyInfo;
