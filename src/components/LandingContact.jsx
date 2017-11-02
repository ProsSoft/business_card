import React from 'react';
import { Formik } from 'formik';

const LandingContact = () => (
  <section className="contact">
    <h3 className="contact-title">Contact us</h3>
    <Formik
      initialValues={{
        email: '',
        phone: '',
        message: ''
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
      render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="email"
            className="contact__form-input"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            value={values.email}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <input
            type="phone"
            className="contact__form-input"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone"
            value={values.phone}
          />
          {touched.phone && errors.phone && <div>{errors.phone}</div>}
          <textarea
            rows="10"
            cols="50"
            name="message"
            className="contact__form-input"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Message"
            value={values.message}
          />
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </form>
      )}
    />
  </section>
);

export default LandingContact;
