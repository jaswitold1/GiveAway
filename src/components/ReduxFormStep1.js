import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
// import {FormContext} from './formProvider'

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className='important'>
        <h1>Important !</h1>
        <p>
          Fill in the details. With this information we can allocate the
          donation better.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='form1 reduxForm'>
        <h1>What do You want to donate? </h1>
        <div>
          <label htmlFor='Ubrania, które nadają się do ponownego uzycia'>
            Clothing, mint condition
          </label>
          <Field
            name='Ubrania, które nadają się do ponownego uzycia'
            component='input'
            type='checkbox'
          />
        </div>
        <div>
          <label className='css-label' htmlFor='Ubrania do wyrzucenia'>
            Clothing, good condition
          </label>
          <Field
            name='Ubrania do wyrzucenia'
            component='input'
            type='checkbox'
            className='css-checkbox'
          />
        </div>
        <div>
          <label htmlFor='Ksiazki'>Books</label>
          <Field name='Ksiazki' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Zabawki'>Toys</label>
          <Field name='Zabawki' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Inne'>Other</label>
          <Field name='Inne' component='input' type='checkbox' />
        </div>
      </form>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "what",
  destroyOnUnmount: false,
})(ContactForm);

export default ContactForm;

// export default function ReduxFormStep1() {

//   const [step1, setStep1] = useState("")
// const handleStep1 = (event) => {

//   if (step1.includes(event.target.value)) {
//     setStep1([...step1.filter(el => el !== event.target.value)])
//   } else {
//     setStep1([...step1,event.target.value])
//   }

// }

//   // const {val,handleInput} = useContext(FormContext)

//   return (
//     <div className="reduxForm">
//       <h1>Zaznacz co chcesz oddać</h1>

//       <form>
//         <div>
//           <input onChange={handleStep1}  value="Ubrania, które nadają się jeszcze do noszenia" name="what" type="checkbox" />
//           <p>Ubrania, które nadają się jeszcze do noszenia</p>
//         </div>
//         <div>
//           <input onChange={handleStep1} value="Ubrania do wyrzucenia" name="what" type="checkbox" />
//           <p>Ubrania do wyrzucenia</p>
//         </div>
//         <div>
//           <input onChange={handleStep1} name="what" type="checkbox" />
//           <p>Zabawki</p>
//         </div>
//         <div>
//           <input onChange={handleStep1} name="what" type="checkbox" />
//           <p>Ksiązki</p>
//         </div>
//         <div>
//           <input onChange={handleStep1} name="what" type="checkbox" />
//           <p>Inne</p>
//         </div>
//       </form>
//     </div>
//   );
// }
