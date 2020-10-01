import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* The Error Messages */
const contactFormSchema = Yup.object({
  name: Yup.string()
    .max(30, 'Max 30 tegn')
    .required('Udfyld et navn'),
  email: Yup.string()
    .email('Dobbeltjek din email')
    .required('Udfyld en email'),
});

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <p className="ContactForm__heading">Vil du høre mere om, hvordan du får din salon på Glowspace?</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={contactFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          let name = JSON.stringify(values.name);
          let email = JSON.stringify(values.email);
          fetch(`/api/send-email?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`)
          .then(response => response.json())
          .then(response => console.log(response));
          setSubmitting(false);
        }}
      >
        <Form className="ContactForm__form">
          <Field 
            name="name" 
            type="text" 
            placeholder="Udfyld dit navn"
            className="ContactForm__nameInput" 
          />
          <ErrorMessage 
            name="name"
            component="div" 
            className="ContactForm__errorMessage"  
          />
          <Field 
            name="email" 
            type="email" 
            placeholder="Og din email"
            className="ContactForm__emailInput" 
          />
          <ErrorMessage 
            name="email"
            component="div" 
            className="ContactForm__errorMessage"  
          />
          <button 
            type="submit"
            className="ContactForm__submitButton">
              send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;