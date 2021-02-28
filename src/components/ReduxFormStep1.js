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
          <label htmlFor='Clothing, mint condition'>
            Clothing, mint condition
          </label>
          <Field
            name='Clothing, mint condition'
            component='input'
            type='checkbox'
          />
        </div>
        <div>
          <label
            className='css-label'
            htmlFor='Clothes sufficient for further use'
          >
            Clothes sufficient for further use
          </label>
          <Field
            name='Clothes sufficient for further use'
            component='input'
            type='checkbox'
            className='css-checkbox'
          />
        </div>
        <div>
          <label htmlFor='Books'>Books</label>
          <Field name='Books' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Toys'>Toys</label>
          <Field name='Toys' component='input' type='checkbox' />
        </div>
        <div>
          <label htmlFor='Other'>Other</label>
          <Field name='Other' component='input' type='checkbox' />
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
