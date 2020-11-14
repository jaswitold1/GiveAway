import React,{useState} from "react";
// import {FormContext} from './formProvider'

export default function ReduxFormStep1() {
  const [step1, setStep1] = useState("")
const handleStep1 = (event) => {
 
  if (step1.includes(event.target.value)) {
    setStep1([...step1.filter(el => el !== event.target.value)])
  } else {
    setStep1([...step1,event.target.value])
  }


}
  
  // const {val,handleInput} = useContext(FormContext)

 
  return (
    <div className="reduxForm">
      <h1>Zaznacz co chcesz oddać</h1>
  
  
      <form>
        <div>
          <input onChange={handleStep1}  value="Ubrania, które nadają się jeszcze do noszenia" name="what" type="checkbox" />
          <p>Ubrania, które nadają się jeszcze do noszenia</p>
        </div>
        <div>
          <input onChange={handleStep1} value="Ubrania do wyrzucenia" name="what" type="checkbox" />
          <p>Ubrania do wyrzucenia</p>
        </div>
        <div>
          <input onChange={handleStep1} name="what" type="checkbox" />
          <p>Zabawki</p>
        </div>
        <div>
          <input onChange={handleStep1} name="what" type="checkbox" />
          <p>Ksiązki</p>
        </div>
        <div>
          <input onChange={handleStep1} name="what" type="checkbox" />
          <p>Inne</p>
        </div>
      </form>
    </div>
  );
}
