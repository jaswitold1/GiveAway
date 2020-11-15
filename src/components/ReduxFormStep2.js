import React,{useEffect} from "react";
import {Field,reduxForm} from 'redux-form'
// import {FormContext} from './formProvider'

let ContactForm = props => {
  const { handleSubmit } = props
 
  return <form className='form2 reduxForm'>
         <label htmlFor="W ile 60L worków zapakowano rzeczy?">W ile 60L worków zapakowano rzeczy?</label>
        <Field name="W ile 60L worków zapakowano rzeczy?" component="select"  >
        
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </Field>

  </form>
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
   destroyOnUnmount: false
})(ContactForm)

export default ContactForm

  