import React from "react";
import { Field, reduxForm } from "redux-form";
// import {FormContext} from './formProvider'

let ContactForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <div className='important'>
        <h1>Important !</h1>
        <p>
          Please pack all things in 60 Litre bags. Detailed instruction on how
          ot pack it is available HERE.
        </p>
      </div>

      <form className='form2 reduxForm'>
        <label htmlFor='W ile 60L worków zapakowano rzeczy?'>
          How many 60L bags have You filled?
        </label>
        <Field name={`How many bags have You packed?` + " "} component='select'>
          <option disabled='true' value=''>
            Amount
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </Field>
      </form>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "howManyBags",
  destroyOnUnmount: false,
})(ContactForm);

export default ContactForm;
