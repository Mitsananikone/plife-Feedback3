/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
// import ConsultationForm from "@/components/consultForm/consultForm";
import styles from "@/components/resources/infoCard/infoCard.module.css";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";

// eslint-disable-next-line react/display-name
export const BreastImplantInfo = React.forwardRef((props, ref) => {
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const breastImplantPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = breastImplantPopupRef.current
    ? breastImplantPopupRef.current.offsetHeight
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

    if (breastImplantPopupRef.current) {
      breastImplantPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (breastImplantPopupRef.current) {
        breastImplantPopupRef.current.removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };
  }, [breastImplantPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={breastImplantPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                Cosmetic Surgery Breast Enlargement
              </h2>

              <span className="text-m flex-wrap">
                <br />
                Cosmetic surgery breast enhancement (augmentation) is usually
                done to enhance the size or shape of breasts or to balance a
                difference in breast size. The procedure is performed by
                inserting a breast implant behind the breast tissue or above the
                breast muscle. <b>Breast Implants</b> come in a variety of
                shapes and sizes, with varying designs, in a range of materials.
                They can be placed in different <b>positions</b> through a
                variety of <b>incision locations</b>. The goal is to leave your
                breasts looking as natural as possible while enlarging them to
                your desired size.
              </span>
              <br />
              <span className="text-m flex-wrap">
                The surgeon may recomment that a <b>breast lift</b> and breast
                augmentation be performed at the same time. This is mostly
                commonly recommended to treat the sagging appearance that
                results from aging or pregnancy. DUring this combined procedure,
                some breast tissue is removed, the breast skin is tightened and
                lifted, and an implant is inserted.
              </span>

              <div className={styles.iCardContainer}>
                <InfoCard
                  imageUrl="/images/info/implant1.png"
                  description="
          Incisions are made to keep scards as inconspicuous as possible, under the breast, around the nipple, or in the armpit.  Breast tissue and skin is lifted to create a pocket for each implant."
                />
                <InfoCard
                  imageUrl="/images/info/implant2.png"
                  description="
          The breast implant may be inserted directly under the breast tissue, partially or completely beneath the pectoral muscle."
                />
                <InfoCard
                  imageUrl="/images/info/implant3.png"
                  description="
          After surgery, breasts appear fuller and more natural in tone and contour.  Scars will fade with time."
                />
              </div>
            </div>
          </CSSTransition>
          {/* </section> */}

          <CSSTransition
            in={showSecondSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[1]} className={popupStyles.motion}>
            <h2 className={popupStyles.infoTitle}>
                Cosmetic Surgery Breast Enlargement
              </h2>

              <span className="text-m flex-wrap">
                Cosmetic surgery breast enlargement is a very popular procedure
                that can be extremely satisfying. It is a permanent improvement
                to breast shape and size, commonly chosen in women who are not
                satisfied with the development of their breasts or in the case
                of trauma, disease or post-pregnancy loss.
                <br />
                Generally, most patientsbenefit by having major boosts in their
                self-confidence, and femininity.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                {" "}
                Best candidates for breast enlargement
              </h2>

              <span className="text-m flex-wrap">
                The best candidates for breast surgery are women who are
                emotionally well-adjusted and who have a through understanding
                of the procedure. They are in good health, have a history of
                physical activity, and eat a healthy diet.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}> Surgical procedure</h2>

              <span className="text-m flex-wrap">
                The operation is carried out under general anesthetic, and
                requires an overnight stay. Where the implents are placed
                depends on your preference and the surgeon&apos;s
                recommendations. Our surgeons usually place implants beneath the
                breast tissue, but implants can be placed in front of, or
                behind, the pectoral muscle. Each position has its own
                advantages, which the surgeon will discuss throughly during your
                consultation. For your benefit, we shall describe the different
                incisions and implant placenment in brief.
                <br />
                <br />
                The 4 different incisions:
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>Under the breast (inframammary incision)</li>
                  <li>Around the nipple (peri-areolar incision)</li>
                  <li>In the arm pit (transaxillary incision)</li>
                  <li>In the naval area (trans-umbilical or TUBA incision)</li>
                </ul>
                <br />
                <br />
                The 3 positions for implant placement
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>Above the pectoral muscles (sub-glandular)</li>
                  <li>
                    *duplicate* Above the pectoral muscles (sub-glandular)
                  </li>
                  <li>Completely behind the muscles (complete sub-muscular)</li>
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
            <h2 className={popupStyles.infoTitle}> Incisions</h2>

              <span className="text-m flex-wrap">
                The inframammary incision is placed in the proximity of the
                crease where the breast and chest come together. This crease is
                *missing*
              </span>

              <h2 className={popupStyles.infoTitle}>
                Benefits of breast enlargement
              </h2>
              <span>
                Cosmetic surgery breast enlargement is a very popular procedure
                that can be extremely satisfying. It is a permanent improvement
                to breast shape and size, commonly chosen in women who are not
                satisfied with the development of their breasts or in the case
                of trauma, disease or post-pregnancy loss.
                <br />
                Generally, most patients benefit by having boosts in the
                self-confidence, and femininity.
              </span>
              <h2 className={popupStyles.infoTitle}>
                Best candidates for breast enlargement
              </h2>
              <span>
                The best candidates for breast surgery are women who are
                emotionally well adjusted and who have a thorough understanding
                of the procedure. They are in good health, have a history of
                physical activity, and eat a healthy diet.
              </span>
              <br />
              <br />
              {/* </section> */}
            </div>
          </CSSTransition>

          <CSSTransition
            in={showFourthSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[3]} className={popupStyles.motion}></div>
          </CSSTransition>
        </div>
      </div>
    </div>
  ); // Close the return
}); // Close the BreastImplantInfo function
