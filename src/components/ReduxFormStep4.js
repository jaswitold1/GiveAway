import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
// import {FormContext} from './formProvider'

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className='important'>
        <h1>Important !</h1>
        <p>Make sure the address is correct</p>
      </div>
      <form onSubmit={handleSubmit} className='form1 reduxForm'>
        <h1>Fill in Your address</h1>
        <div>
          <label htmlFor='Street name: '>Street name </label>
          <Field name='Street name: ' component='input' type='input' />
        </div>
        <div>
          <label htmlFor='City: '>City </label>
          <Field name='City: ' component='input' type='input' />
        </div>
        <div>
          <label htmlFor='Postal code: '>Postal code</label>
          <Field name='Postal code: ' component='input' type='input' />
        </div>
        <div>
          <label htmlFor='Phone number: '>Phone number </label>
          <Field name='Phone number: ' component='input' type='input' />
        </div>
      </form>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
  destroyOnUnmount: false,
})(ContactForm);

export default ContactForm;
