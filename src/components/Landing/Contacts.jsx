/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import Modal from "./Services/modal";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPhone from "react-icons/lib/fa/phone";
import {formRegex} from '../../constants';
import {imagesUrl} from '../../constants';

class ContactUs extends React.Component{
  state = {
  isOpenOk: false,
  isOpenErr: false,
  }

  toggleModalOk = () => {
    this.setState({
      isOpenOk: false
    });
  }
 toggleModalErr = () => {
    this.setState({
      isOpenErr: false
    });
  }
  render(){
    const {title} = this.props;
    const {email} = this.props;
    const {UK: { tel: telUK }} = this.props;
    const { UA: { tel: telUA }} = this.props;
    return (
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
        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
              .then( httpResponse => {
                if (httpResponse.ok) {
                  this.setState({
                    isOpenOk: true,
                  },() => {
                    setTimeout(this.toggleModalOk,6000)
                  })
                    actions.resetForm();
                } else {
                    return httpResponse.text()
              .then(text => Promise.reject(text));
                }
                return null
              })
              .catch(() => {
                  this.setState({
                      isOpenErr: true,
                    },() => {
                      setTimeout(this.toggleModalErr,6000)
                    })
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
              placeholder="Your email"
              value={values.email}
            />
            <div className="contact__form-error">{(touched.phone && errors.phone) ? errors.phone : ""}</div>
            <input
              type="phone"
              className="contact__form-input"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your phone or Skype Id, Messanger etc"
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
    <Modal show={this.state.isOpenOk}  onClose={this.toggleModalOk}>
       <img  alt="modalmage" src={`${imagesUrl}/check.png`}/>
       <h3 className="modal-title">Thank you! </h3>
       <div className="modal-font"> Your message has been successfully sent!</div>
       <div className="modal-font"> We will answer you as soon as possible! </div>
    </Modal>
    <Modal show={this.state.isOpenErr}  onClose={this.toggleModalErr}>
       <img  alt="modalmage" src={`${imagesUrl}/sad.png`}/>
       <div className="modal-font">Oops, something went wrong. Please try again </div>
    </Modal>
  </section>
    )
  }
}

export default ContactUs;
