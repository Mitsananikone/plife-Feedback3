/** @format */

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slick from "@/components/home/slick/slick";
import AnimInfoCard from "@/components/home/animInfoCard/animInfoCard";

import Head from "next/head";
import styles from "./landingPage.module.css";
import { CldImage } from "next-cloudinary";

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
      }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const Slideshow = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const images = ["home/home1.webp", "home/home2.webp", "home/home3.webp"];
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.clientHeight);
    }
  }, [windowWidth]);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const computedWidth = windowHeight / 0.75;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className={styles.imageContainer}>
        {images.map((img, index) => (
          <div
            key={img}
            className={`${styles.landingContainer} ${
              index === currentImageIndex ? styles.visible : ""
            }`}
          >
            <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src={img}
              alt={`Slideshow image ${index + 1}`}
            />
          </div>
        ))}
        <div className={styles.slickContainerHome}>
          <Slick />
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const computedHeight = windowWidth * 0.75;

  return (
    <div className={styles.landingPage}>
      <Slideshow />
      <FadeInSection>
        <section className={styles.section} id={styles.section1}>
        <div className={styles.section_text} style={{marginTop: '-20px'}}>
        <h2 className={styles.sectionTitle} >
              Exclusive Plastic Surgery Packages
            </h2> 
          <div className={styles.section_image}>
             <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyleSection1} /* Applying CSS style */
              src="home/section1Background.webp"
              alt="section 1 background"
            />
     

            </div>
          </div>

          <motion.div
            className={styles.section_text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className={styles.packages} style={{marginTop: '-80px'}}>
              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery1.webp"
                  title="Package 1"
                  body="Experience seamless medical care with our surgery package, complete with travel arrangements and a stay in luxury accommodation, tailored just for you."
                />
              </motion.div>

              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery2.webp"
                  title="Package 2"
                  body="Unlock unparalleled savings with our dual-surgery package; we handle all your travel needs and ensure your recovery in opulent accommodation."
                />
              </motion.div>

              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery3.webp"
                  title="Package 3"
                  body="Embrace the pinnacle of value with our triple-surgery offer: extensive medical procedures combined with premium travel and the finest luxury lodgings, all at an unbeatable rate."
                />
              </motion.div>
            </div>
            
          </motion.div>
  
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section2}>
          <div className={styles.section_image}>
             <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src="home/section2Background.webp"
              alt="section 2 background"
            />
          </div>
          <div className={styles.section_text}>
            <h2 className={styles.sectionTitle}>
              Luxurious, Seamless Journeys
            </h2>
            <p>
              Relinquish the stresses of travel. From your baggage check-in to
              the welcoming embrace of your resort, to every scenic drive in
              between, be chauffeured with grace. Revel in the serenity of our
              all-inclusive travel experience.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section3}>
          <div className={styles.section_image}>
          <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src="home/section3Background.webp"
              alt="section 3 background"
            />
          </div>
          <div className={styles.section_text}>
            <h2 className={styles.sectionTitle}>
              Guidance from World-Renowned Thai Surgeons
            </h2>
            <p>
              Embark on your transformational journey with the finest surgical
              maestros of Thailand. Their unmatched expertise ensures
              you&apos;re always in safe hands, guiding you every step of the
              way, molding dreams into reality.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section4}>
          <div className={styles.section_image}>
          <CldImage
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              width={3000}
              height={1688}
              className={styles.imageStyle} /* Applying CSS style */
              src="home/section4Background.webp"
              alt="section 4 background"
            />
          </div>
          <div className={styles.section_text}>
            <h2 className={styles.sectionTitle}>
              Unwavering Post-Surgery Aftercare
            </h2>
            <p>
              Post-operative care is a testament to our commitment. We pledge to
              cradle you with attention, ensuring swift recovery, comfort, and
              peace of mind. Because your well-being is at the heart of what we
              do.
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default LandingPage;
