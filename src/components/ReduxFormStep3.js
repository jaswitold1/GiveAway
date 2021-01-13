import React, { useState } from "react";

import { Field, reduxForm } from "redux-form";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className='important'>
        <h1>Wazne !</h1>
        <p>
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </div>
      <form onSubmit={handleSubmit} className=' reduxForm'>
        <label htmlFor='Location '>Lokalizacja</label>
        <Field name='Location ' component='select'>
          <option disabled='true' value=''>
            Choose City
          </option>
          <option value='Warszawa'>Warszawa</option>
          <option value='Krakow'>Krakow</option>
          <option value='Poznan'>Poznan</option>
          <option value='Wroclaw'>Wroclaw</option>
        </Field>
        <h1>Komu chcesz pomóc ?</h1>
        <div>
          <label htmlFor='Kids'>dzieciom</label>
          <Field name='Kids' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Single mothers'>Samotnym matkom</label>
          <Field name='Single mothers' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Homeless'>bezdomnym</label>
          <Field name='Homeless' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Disabled'>Disabled</label>
          <Field name='Disabled' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Elderly people'>Elder people</label>
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
