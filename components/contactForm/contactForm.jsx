/** @format */

import React, { useState } from "react";
import styles from "./contactForm.module.css"; // assuming you'll have a CSS module named FormComponent.module.css

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    procedures: [],
    preferredContactMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "procedures") {
      const valueArray = formData.procedures;
      if (e.target.checked) {
        valueArray.push(e.target.value);
      } else {
        const index = valueArray.indexOf(e.target.value);
        if (index > -1) {
          valueArray.splice(index, 1);
        }
      }
      setFormData({ ...formData, procedures: valueArray });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <p>
        Embark on a luxurious journey with us. Get in touch to explore the best
        cosmetic surgery packages tailored for you.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
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
        <p>Procedures of Interest:</p>
        <div className={styles.checkboxes}>
          <br />
          {[
            "Breast augmentation",
            "Liposuction",
            "Rhinoplasty",
            "Blepharoplasty",
            "Abdominoplasty",
            "Facelift",
            "Ear pinning",
            "Buttock augmentation",
            "Chin augmentation",
          ].map((procedure, idx) => (
            <div key={idx} className={styles.checkboxContainer}>
              <input
                type="checkbox"
                value={procedure}
                name="procedures"
                onChange={handleChange}
              />
              <label>{procedure}</label>
            </div>
          ))}
        </div>

        <select
          name="preferredContactMethod"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
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

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
