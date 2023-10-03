/** @format */

import { useState, useEffect } from "react";
import styles from "./contactsPage.module.css";
import { FaPhone, FaEnvelope, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';
import ContactForm from '@/components/contactForm/contactForm';
import { CldImage } from "next-cloudinary";

const Contacts = () => {
  const [windowWidth, setWindowWidth] = useState(0);
    const [isVisible, setIsVisible] = useState([false, false, false, false]); 

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

  useEffect(() => {
    // Show the first section
    setTimeout(() => setIsVisible([true, false, false]), 300);

    // Show the second section after 0.3s
    setTimeout(() => setIsVisible([true, true, false]), 600);

    // Show the third section after 0.6s
    setTimeout(() => setIsVisible([true, true, true]), 900);
    setTimeout(() => setIsVisible(prev => [...prev.slice(0,3), true]), 1100);
  }, []);
    const sectionData = [
      {
        backgroundImage: "/images/contacts/contacts2.webp",
        title: "Thailand's Premier Plastic Surgery Destination",
        description: "Thailand has long been recognized not only for its breathtaking landscapes and rich cultural heritage but also for its world-class medical facilities. In recent years, Thailand has emerged as a global hotspot for plastic surgery, offering state-of-the-art procedures at a fraction of the cost found in Western countries. With highly skilled surgeons trained in the latest techniques and equipped with cutting-edge technology, the country provides an unbeatable combination of quality and affordability. From rhinoplasty to body contouring, Thailand's plastic surgery clinics cater to a diverse clientele, ensuring personalized care and impeccable results. For those seeking transformative procedures with an added touch of luxury and privacy, there's no better destination than the Land of Smiles."
      },
        {
          backgroundImage: "/images/contacts/contacts1.webp",
          title: "Luxury Travel and Accomodations",
          description: "Embark on an unparalleled voyage of luxury as you travel from the historic heart of Berlin to the exotic realms of Thailand. Our all-inclusive package ensures a journey wrapped in opulence, starting from your first-class flight ticket, granting you panoramic aerial views and impeccable onboard services. Upon arrival, a chauffeur-driven limousine awaits to whisk you away to a 5-star resort nestled amidst Thailand's pristine beaches and verdant jungles. Enjoy gourmet meals, spa treatments, and curated local experiences, all meticulously planned to blend comfort with cultural immersion. With every detail fine-tuned to perfection, your journey between these two iconic cities promises to be as unforgettable as the destinations themselves."
        },
        
          {
            backgroundImage: "/images/contacts/contacts3.webp",
            title: "Luxury Recovery: Thailand's Post-Surgery Retreats",
            description: "After undergoing a surgical procedure, the recovery process is paramount, and Thailand offers an unparalleled experience in this regard. Nestled amidst serene landscapes, Thailand's luxury post-surgery retreats are designed to provide patients with a holistic healing environment. These havens combine state-of-the-art medical care with the comforts of a five-star resort. Imagine recuperating beside a tranquil beach, or within the embrace of lush tropical forests, with dedicated staff catering to your every need. Personalized rehabilitation programs, world-class spa treatments, and gourmet meals ensure that your recovery is not just swift, but also indulgent. It's a place where wellness meets opulence, ensuring that every patient rejuvenates both physically and mentally. In Thailand, your road to recovery is paved with luxury."
          },
      ];
      
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    procedureOfInterest: "",
    preferredContactMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to server)
    console.log(formData);
  };

  const cloudinaryLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/phoeniquelife/image/upload/w_${width},q_${quality}/${src}`;
  };

  const imageUrl = cloudinaryLoader({
    src: "contacts/contactsBackground.webp",
    width: windowWidth,
    quality: 80 // you can define the quality parameter as per your requirement
  });


  return (
    <div
    className="background">
      <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>
      <CldImage
cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} 
      width={windowWidth} 
      height={computedHeight}
      src="contacts/contactsBackground.webp" />

    <div className={styles.contactPage}>

<section className={`${styles.mapAndFormSection} ${isVisible[3] ? styles.fadeIn : styles.hidden}`}>
        <div className={styles.mapContainer}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.7060378565!2d13.259927282563122!3d52.506938616176896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1694630515875!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

          <div className={styles.formContainer}>
    
  

          <ContactForm/>
          {/* <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
            />
            <select name="procedureOfInterest" onChange={handleChange}>
              <option value="" disabled selected>
                Procedure of Interest
              </option>
              <option value="rhinoplasty">Rhinoplasty</option>
              <option value="facelift">Facelift</option>
              <option value="liposuction">Liposuction</option>
          
            </select>
            <select name="preferredContactMethod" onChange={handleChange}>
              <option value="" disabled selected>
                Preferred Contact Method
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <textarea
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
              required
            ></textarea>
            <div className={styles.privacyPolicy}>
              <input type="checkbox" required />
              <label>I agree to the Privacy Policy</label>
            </div>
            <button type="submit">Submit</button>
          </form> */}
          </div>
          </section>

          <section>
    <div className={styles.directContact}>
        <div className={styles.iconContainer}>
            <FaPhone className={styles.icon}/>
            <p>+123 456 7890</p>
        </div>
        <div className={styles.iconContainer}>
            <FaEnvelope className={styles.icon}/>
            <p>email@phoeniquelife.com</p>
        </div>
        <div className={styles.iconContainer}>
            <FaWhatsapp className={styles.icon}/>
            <p>+123 456 7890</p>
        </div>
        <div className={styles.iconContainer}>
            <FaTwitter className={styles.icon}/>
            <p>+123 456 7890</p>
        </div>
        <div className={styles.iconContainer}>
            <FaFacebook className={styles.icon}/>
            <p>+123 456 7890</p>
        </div>
    </div>
</section>


      </div>
      </div>

  );
};

export default Contacts;
