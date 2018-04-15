/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {formRegex} from '../../constants'

const LandingContact = (props) => (
  <section className="contact" id="contacts" ref={props.scrollElem}>
    <h3 className="contact__title">Contact us</h3>
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
    />
  </section>
);

export default LandingContact;
