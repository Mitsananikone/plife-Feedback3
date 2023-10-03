/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const FaceLiftInfo = React.forwardRef((props, ref) => {
  FaceLiftInfo.displayName = "FaceLiftInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const faceLiftPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = faceLiftPopupRef.current
    ? faceLiftPopupRef.current.offsetHeight
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

    if (faceLiftPopupRef.current) {
      faceLiftPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (faceLiftPopupRef.current) {
        faceLiftPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [faceLiftPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={faceLiftPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}>Cosmetic Surgery Face Lift</h2>

              <span className="text-m flex-wrap">
                <br />A facelift, technically known as rhytidectomy, is a
                surgical procedure designed to smooth and tighten the skin of
                the face and neck. It provides rejuvenation to counteract the
                effects of aging, gravity, and sun exposure.
              </span>
              <br />
              <span className="text-m flex-wrap">
                Over time, facial tissues can sag and lose volume, leading to a
                tired and aged appearance. A facelift aims to restore a fresher,
                more youthful look by addressing these issues.
              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                   imageUrl="/images/info/face1.png"
                  description="The procedure tightens underlying muscles and tissues, removes excess fat, and re-drapes the skin."
                />
                <InfoCard
                   imageUrl="/images/info/face2.png"
                  description="It's a comprehensive approach to treating facial wrinkles and sagging caused by aging."
                />
                <InfoCard
                   imageUrl="/images/info/face3.png"
                  description="Patients often report a boost in self-esteem and a more youthful and refreshed appearance post-surgery."
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
                The Appeal of Face Lifts
              </h2>

              <span className="text-m flex-wrap">
                A facelift addresses sagging, folds, and wrinkles that develop
                over time, offering a rejuvenated facial profile. It not only
                improves facial appearance but also has a positive impact on
                self-confidence and well-being.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                Best Candidates for a Face Lift
              </h2>

              <span className="text-m flex-wrap">
                Ideal candidates for facelifts are those who wish to combat the
                signs of aging but still have some skin elasticity. Good overall
                health, non-smoking habits, and realistic expectations are
                essential for optimal results.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              <span className="text-m flex-wrap">
                A facelift generally takes several hours and is performed under
                general anesthesia. Incisions are made near the hairline, around
                the ear, and potentially, in the lower scalp. Excess skin is
                removed, and underlying tissues are tightened.
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>
                    Traditional facelift: Involves a full incision, best for
                    those with significant sagging and aging.
                  </li>
                  <li>
                    Mini facelift: Shorter incision, ideal for those with
                    minimal sagging.
                  </li>
                  <li>
                    Neck lift: Targets the neck and jawline, can be done
                    alongside a traditional facelift.
                  </li>
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
              Recovery from a facelift involves some swelling, bruising, and discomfort, but these subside over time. Results are long-lasting, offering a refreshed and youthful appearance. While it doesn&apos;t stop aging, it can turn back the clock significantly.
              </span>

              <h2 className={popupStyles.infoTitle}>
              Benefits of a Face Lift
              </h2>
              <span>
              A facelift offers a rejuvenated appearance, reduces lines and wrinkles, tightens loose skin, and can complement other procedures like eyelid surgery or brow lifts for a holistic refreshed look.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
              Every surgical procedure has risks. For facelifts, these include infection, poor scarring, hematoma, nerve injury, and complications related to anesthesia. It&apos;s crucial to discuss these risks with your surgeon during the consultation.
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
              Are you considering a facelift? It&apos;s essential to consult with a board-certified plastic surgeon to understand the procedure, its benefits, and determine if it&apos;s the right choice for you.
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

export default FaceLiftInfo;
