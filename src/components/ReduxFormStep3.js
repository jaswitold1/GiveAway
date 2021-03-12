import React from "react";

import { Field, reduxForm } from "redux-form";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className='important'>
        <h1>Important !</h1>
        <p>
          Please disclose specific city You want to help and what kind of people
          in need.
        </p>
      </div>
      <form onSubmit={handleSubmit} className=' reduxForm'>
        <label htmlFor='Location '>Location </label>
        <Field name='Location ' component='select'>
          <option disabled='true' value=''>
            Choose City
          </option>
          <option value='Warszawa'>Warszawa</option>
          <option value='Krakow'>Krakow</option>
          <option value='Poznan'>Poznan</option>
          <option value='Wroclaw'>Wroclaw</option>
        </Field>
        <h1>Who do You want to help ?</h1>
        <div>
          <label htmlFor='Kids'>Kids</label>
          <Field name='Kids' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Single mothers'>Single mothers</label>
          <Field name='Single mothers' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Homeless'>Homeless</label>
          <Field name='Homeless' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Disabled'>Disabled</label>
          <Field name='Disabled' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Elderly people'>Elderly people</label>
          <Field name='Elderly people' component='input' type='checkbox' />
        </div>
      </form>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "whereAndWhom",
  destroyOnUnmount: false,
})(ContactForm);

export default ContactForm;
