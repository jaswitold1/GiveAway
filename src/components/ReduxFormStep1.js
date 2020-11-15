import React,{useState} from "react";
import {Field,reduxForm} from 'redux-form'
// import {FormContext} from './formProvider'

let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}  className='form1 reduxForm'>
    <h1>Zaznacz co chcesz oddać</h1>
        <div>
          <label htmlFor="Ubrania, które nadają się do ponownego uzycia">Ubrania, które nadają się do ponownego uzycia</label>
        <Field  name="Ubrania, które nadają się do ponownego uzycia" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="Ubrania do wyrzucenia">Ubrania do wyrzucenia</label>
        <Field  name="Ubrania do wyrzucenia" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="Ksiazki">Ksiazki</label>
        <Field name="Ksiazki" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="Zabawki">Zabawki</label>
        <Field name="Zabawki" component="input" type="checkbox" />
        </div>
         <div>
          <label htmlFor="Inne">Inne</label>
        <Field name="Inne" component="input" type="checkbox" />
        </div>
       
  </form>
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
   destroyOnUnmount: false
})(ContactForm)

export default ContactForm

  


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
