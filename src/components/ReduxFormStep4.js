import React,{useState} from "react";
import {Field,reduxForm} from 'redux-form'
// import {FormContext} from './formProvider'

let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}  className='form1 reduxForm'>
    <div className="important">
        <h1>Wazne !</h1>
        <p>
   Podaj adres oraz termin odbioru rzeczy.
        </p>
      </div>
    <h1>Zaznacz co chcesz oddać</h1>
        <div>
          <label htmlFor="Ulica">Ulica</label>
        <Field  name="Ulica" component="input" type="input" />
        </div>
         <div>
          <label htmlFor="Miasto">Miasto</label>
        <Field  name="Miasto" component="input" type="input" />
        </div>
         <div>
          <label htmlFor="Kod pocztowy">Kod pocztowy</label>
        <Field name="Kod pocztowy" component="input" type="input" />
        </div>
         <div>
          <label htmlFor="Numer telefonu">Numer telefonu</label>
        <Field name="Numer telefonu" component="input" type="input" />
        </div>
      
       
  </form>
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
   destroyOnUnmount: false
})(ContactForm)

export default ContactForm

  
