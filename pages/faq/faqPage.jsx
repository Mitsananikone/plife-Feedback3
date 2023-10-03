/** @format */

import React, { useState, useEffect } from "react";
import styles from "./faqPage.module.css";

import Head from "next/head";
import { CldImage } from "next-cloudinary";

const FAQPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [visibleAnswerIndex, setVisibleAnswerIndex] = React.useState(null);

  const handleQuestionClick = (index) => {
    if (visibleAnswerIndex === index) {
      setVisibleAnswerIndex(null); // Collapse the currently open answer
    } else {
      setVisibleAnswerIndex(index); // Show the clicked answer
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const computedHeight = (windowWidth) * 0.75;

  const faqs = [
    {
      question:
        'What exactly is included in the "all-in-one" solution package?',
      answer:
        "Our all-in-one package provides a comprehensive solution, ensuring a seamless experience from surgery selection, flight booking, hotel reservations, transfers, financing options, to activity and entertainment bookings. You don't have to worry about the details; we've got it all covered for you.",
    },
    {
      question:
        "How are your packages cost-effective compared to getting surgery in Germany?",
      answer:
        "By bundling surgery, travel, accommodation, and transfers together, we leverage bulk deals and partnerships in our destination country, resulting in costs comparable to just the surgery price in Germany. Plus, you get a vacation experience in the mix!",
    },
    {
      question:
        "Can I customize the packages further with extra procedures or longer stays?",
      answer:
        "Absolutely! We understand every individual's needs are unique. You can add additional procedures, extend your stay, upgrade your flights, and even choose special relaxation or entertainment packages tailored to your preferences.",
    },
    {
      question:
        "Tell me more about the quality of the surgeons and the clinics you work with.",
      answer:
        "Our medical advisory board consists of renowned surgeons, such as Dr. Theerapong Poonyakariyagorn and Dr. Phonlawat Trakunngoenthai, who come with years of expertise and international certifications. We collaborate only with the best clinics, ensuring high standards of safety, quality, and care.",
    },
    {
      question: "What kind of post-op care and service can I expect?",
      answer:
        "Your well-being is our priority. Expect a thorough pre and post-op care plan, ensuring your recovery is smooth. Our packages are designed to provide a relaxed environment with professional assistance throughout your journey, making sure you recuperate in the best possible setting.",
    },
    {
      question: "How does financing work? Are there any hidden fees?",
      answer:
        "We offer flexible financing options to cater to various needs. All costs related to your chosen package will be transparently detailed, and there are no hidden fees. Our aim is to provide an affordable, value-driven experience.",
    },
    {
      question: "Can I combine multiple surgeries in one trip?",
      answer:
        "Yes, we offer different packages allowing you to choose one, two, or even three surgeries based on your requirements. Our medical team will ensure that the chosen combination is safe and suitable for your health.",
    },
    {
      question:
        "What if I face any complications or need further treatments once I'm back in Germany?",
      answer:
        "Your safety and satisfaction are paramount. In the unlikely event of post-operative complications, we ensure that you receive the necessary assistance. Our medical team and partners are committed to your health, both during your stay and once you return home.",
    },
    {
      question:
        "Do you help with activity and entertainment bookings during the recovery period?",
      answer:
        "Absolutely! Your recovery experience can be enhanced with a range of entertainment and relaxation options that we offer. Whether it's spa treatments, sightseeing, or local experiences, we'll help you make the most of your trip.",
    },
    {
      question:
        "How experienced are the hospitals and clinics in dealing with international patients?",
      answer:
        "Our partner clinics, like Interplast Clinic and Bumrungrad International Hospital, have decades of experience catering to international patients. With state-of-the-art facilities, multilingual staff, and a deep understanding of global healthcare standards, they provide care that's on par with the best in the world.",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.bannerContainer}>
      <CldImage
cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} 
      width={windowWidth} 
      height={computedHeight}
      src="faq/faqBanner.webp" />

        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      </div>
      <div className={styles.questionAnswerContainer}>
        <div className={styles.faqContent}>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className={styles.question}
                onClick={() => handleQuestionClick(index)}
              >
                {index + 1}. {faq.question}
                <span className={styles.arrowIcon}>&#x25BC;</span>{" "}
                {/* Arrow Down Icon */}
              </div>
              <div
                className={
                  visibleAnswerIndex === index
                    ? `${styles.answer} ${styles.visible}`
                    : styles.answer
                }
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
