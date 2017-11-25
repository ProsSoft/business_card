/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {formRegex} from '../constants'

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
        } else if (!emailValid.test(values.email)) {
          console.log({emailValid});
          console.log('email', values.email);
          errors.email = 'Invalid email address';
        }
        if (!values.phone) {
          errors.phone = 'Required';
        }
        return errors;
      }}
      onSubmit={values => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
      render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="contact__form">
          {touched.email && errors.email && <div className="contact__form-error">{errors.email}</div>}
          <input
            type="email"
            className="contact__form-input"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            value={values.email}
          />
          {touched.phone && errors.phone && <div className="contact__form-error">{errors.phone}</div>}
          <input
            type="phone"
            className="contact__form-input"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone"
            value={values.phone}
          />
          <textarea
            rows="3"
            cols="50"
            name="message"
            className="contact__form-input"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Message"
            value={values.message}
            required
          />
          <button type="submit" className="landing-green-btn landing-green-btn--center" disabled={isSubmitting}>
            Send
          </button>
        </form>
      )}
    />
  </section>
);

export default LandingContact;
