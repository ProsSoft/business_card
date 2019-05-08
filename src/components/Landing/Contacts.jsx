/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {formRegex} from '../../constants'

const ContactUs = ({
                     title,
                     email,
  UK: { tel: telUK },
  UA: { tel: telUA }
}) => (
  <section className="contact" id="contact-us">
    <h3 className="contact__title">{title}</h3>
    <a className="contact__item" href={`mailto:${email}`}><h2>{email}</h2></a>
    <a className="contact__item" href={`tel:${telUK}`}><h2>{telUK}</h2></a>
    <a className="contact__item" href={`tel:${telUA}`}><h2>{telUA}</h2></a>
    {/*<Formik
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
      onSubmit={values => (values)}
      render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="contact__form">
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
    />*/}
  </section>
);

export default ContactUs;
