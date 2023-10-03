/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const LiposuctionInfo = React.forwardRef((props, ref) => {
  LiposuctionInfo.displayName = "LiposuctionInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const liposuctionPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = liposuctionPopupRef.current
    ? liposuctionPopupRef.current.offsetHeight
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

    if (liposuctionPopupRef.current) {
      liposuctionPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (liposuctionPopupRef.current) {
        liposuctionPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [liposuctionPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={liposuctionPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}> Cosmetic Surgery Liposuction</h2>

              <span className="text-m flex-wrap">
                <br />A liposuction, technically known as rhytidectomy, is a
                surgical procedure designed to smooth and tighten the skin of
                the face and neck. It provides rejuvenation to counteract the
                effects of aging, gravity, and sun exposure.
              </span>
              <br />
              <span className="text-m flex-wrap">
              Over time, some areas of the body can accumulate fat that doesn&apos;t easily go away with traditional weight loss methods. Liposuction aims to sculpt and reshape these areas, providing a more contoured appearance.
              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                   imageUrl="/images/info/lipo1.png"
                   description="The procedure is a cosmetic solution for localized fat deposits, offering enhanced body contours."
                />
                <InfoCard
                   imageUrl="/images/info/lipo2.png"
                   description="It's not a weight-loss method but rather a body contouring technique."

                />
                <InfoCard
                   imageUrl="/images/info/lipo3.png"
                   description="Post-surgery, patients often feel more confident in their body and clothing fit better."

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
                The Appeal of Liposuction
              </h2>

              <span className="text-m flex-wrap">
              Liposuction offers immediate and impactful results. It provides a solution for those stubborn areas that don&apos;t seem to change regardless of diet and exercise. The procedure refines body contours, enhancing one&apos;s physical appearance and self-esteem.

              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
              Best Candidates for Liposuction
              </h2>

              <span className="text-m flex-wrap">
              Ideal candidates for liposuction are those who are at or near their target weight but have localized fat deposits they wish to eliminate. It&apos;s important for candidates to have good skin elasticity, be in good overall health, and hold realistic expectations about the results.
</span>
        
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              <span className="text-m flex-wrap">
              The procedure involves making small incisions and inserting a thin tube called a cannula to suction out fat. There are various techniques, such as tumescent or ultrasound-assisted, that aid in breaking up the fat before it&apos;s removed.
  <br />
  <br />
  <ul className="custom-bullet-list">
    <li>Tumescent Liposuction: A solution is injected to ease fat removal.</li>
    <li>Ultrasound-Assisted Liposuction: Uses sound waves to liquefy fat.</li>
    <li>Laser-Assisted Liposuction: Utilizes laser energy to break up and liquefy fat.</li>
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
              Recovery from liposuction typically involves swelling, bruising, and mild discomfort, but these symptoms gradually diminish. Compression garments are often recommended to reduce swelling and shape the treated area. The final results, revealing a more contoured body profile, can take a few weeks to months as the swelling subsides.
              </span>

              <h2 className={popupStyles.infoTitle}>
              Benefits of Liposuction
              </h2>
              <span>
              Liposuction can dramatically improve body contours, eliminate stubborn fat pockets, enhance self-confidence, and promote a more positive body image.

              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
              As with any surgical procedure, liposuction comes with risks. These include infection, uneven contours, scarring, fluid accumulation, numbness, and complications related to anesthesia. A thorough consultation with a certified surgeon is vital to understand these risks.

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
              Considering liposuction? It&apos;s crucial to consult with a board-certified plastic surgeon to delve deep into the procedure, its benefits, and to determine if it&apos;s the best fit for your goals.

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

export default LiposuctionInfo;
