import React, { useState } from "react";

export default function ReduxFormStep3() {
  const [step3,setStep3] = useState('Warszawa')
const [step3Who,setStep3Who] = useState("")
  const handleStep3 = (event) => {
setStep3(event.target.value)
  }
  const handleStep3Who = (event) => {
   if (step3Who.includes(event.target.value)) {
    setStep3Who([...step3Who.filter(el => el !== event.target.value)])
  } else {
    setStep3Who([...step3Who,event.target.value])
  }
  }
  return (
    <div className="reduxForm">
      <h1>Lokalizacja</h1>
      <select onChange={handleStep3} value={step3}  name="" id="">
        <option value="Warszawa">Warszawa</option>
        <option value="Poznań">Poznań</option>
        <option value="Kraków">Kraków</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Katowice">Katowice</option>
      </select>
      <p>Komu chcesz pomóc</p>
      <div >
        <p>dzieciom</p>
        <input onChange={handleStep3Who} value='dzieciom' type="checkbox" />
        <p>samotnym matkom</p>
      <input onChange={handleStep3Who} value='samotnym matkom' type="checkbox" />
      <p>bezdomnym</p>
      <input onChange={handleStep3Who} value='bezdomnym' type="checkbox" />
      <p>niepelnosprawnym</p>
      <input onChange={handleStep3Who} value='niepelnosprawnym' type="checkbox" />
      <p>osobom starszym</p>
      <input onChange={handleStep3Who} value='osobom starszym' type="checkbox" />
      </div>
    </div>
  );
}
