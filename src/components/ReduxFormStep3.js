import React, { useState } from "react";

import {Field,reduxForm} from 'redux-form'


let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}  className=' reduxForm'>
    <div className="important">
        <h1>Wazne !</h1>
        <p>
       Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
        </p>
      </div>
       <label htmlFor="Lokalizacja">Lokalizacja</label>
        <Field name="Lokalizacja" component="select"  >
        
        <option value="Warszawa">Warszawa</option>
        <option value="Krakow">Krakow</option>
        <option value="Poznan">Poznan</option>
        <option value="Wroclaw">Wroclaw</option>

        
        </Field>
<h1>Komu chcesz pomóc ?</h1>
         <div>
          <label htmlFor="dzieciom">dzieciom</label>
        <Field  name="dzieciom" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="samotnym matkom">Samotnym matkom</label>
        <Field  name="Samotnym matkom" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="bezdomnym">bezdomnym</label>
        <Field name="bezdomnym" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="niepelnosprawnym">niepelnosprawnym</label>
        <Field name="niepelnosprawnym" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="osobom starszym">osobom starszym</label>
        <Field name="osobom starszym" component="input" type="checkbox" />
        </div>

    
       
  </form>
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'whereAndWhom',
   destroyOnUnmount: false
})(ContactForm)

export default ContactForm

  
