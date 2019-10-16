/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPhone from "react-icons/lib/fa/phone";
import {formRegex} from '../../constants';


const ContactUs = ({
                     title,
                     email,
                     UK: { tel: telUK },
                     UA: { tel: telUA }
                   }) => (
  <section className="contact" id="contact-us">
    <h3 className="contact__title">{title}</h3>
    <div className="contact__block">
      <a target="_blank" className="contact__block__item" href={`mailto:${email}`}>
        <FaEnvelope className="item__icon" />
        <span className="text">{email}</span>
      </a>
      <a className="contact__block__item" href={`tel:${telUK}`}>
        <FaPhone className="item__icon" />
        <span className="text">{telUK}</span>
        <img className="flag" src="/dist/assets/images/gb.png" alt="UK" />
      </a>
      <a className="contact__block__item" href={`tel:${telUA}`}>
        <FaPhone className="item__icon" />
        <span className="text">{telUA}</span>
        <img className="flag" src="/dist/assets/images/ua.png" alt="UA" />
      </a>
    </div>
    <Formik
      initialValues={{
        email: '',
        phone: '',
        message: ''
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const {emailValid} = formRegex;
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }

        if (values.email && !emailValid.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.message) {
          errors.message = 'Required';
        }
        return errors;
      }}
     onSubmit={(values, actions) => {
      const params = {
        user_id: 'user_QUEl2Al0q48a36pqmlsCI',
        service_id: 'gmail',
        template_id: 'template_OJNVI9tD',
        template_params: {
          'email':   values.email,
          'phone' :  values.phone,
          'message': values.message
        },
    };
    const headers = {
        "Content-type": "application/json"
    };

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(params)
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', options )
        // eslint-disable-next-line consistent-return
        .then( httpResponse => {
            if (httpResponse.ok) {
                 actions.resetForm();
            } else {
                return httpResponse.text()
                    .then(text => Promise.reject(text));
            }
        })
        .catch((error) => {
            console.log(`Oops... ${  error}`);
        });
    }}
      render={({ values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting }) => (
        <form onSubmit={handleSubmit} className="contact__form" >
          <div className="contact__form-error">{(touched.email && errors.email) ? errors.email : ""}</div>
          <input
            type="email"
            className="contact__form-input"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            value={values.email}
          />
          <div className="contact__form-error">{(touched.phone && errors.phone) ? errors.phone : ""}</div>
          <input
            type="phone"
            className="contact__form-input"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone"
            value={values.phone}
          />
          <div className="contact__form-error">{(touched.message && errors.message) ? errors.message : ""}</div>
          <textarea
            rows="3"
            cols="50"
            name="message"
            className="contact__form-input"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Message"
            value={values.message}
          />
          <div className="contact__form-button-wrapper">
            <button type="submit" className="landing-green-btn landing-green-btn--center" disabled={isSubmitting}>
              Send
            </button>
          </div>

        </form>
      )}
    />
  </section>
);

export default ContactUs;
