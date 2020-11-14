import React, { useState } from "react";

export default function ReduxFormStep2() {
  const [step2,setStep2] = useState("1")
  const handleStep2 = (event) => {
    setStep2(event.target.value)
  }
  return (
    <div className="reduxForm">
      <h1>Podaj liczbę 60L worków do których spakowałeś rzeczy</h1>
      <form>
        <p>Liczba worków</p>
        <select onChange={handleStep2} value={step2}  name="" id="">
          <option  value="1">1</option>
          <option  value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    </div>
  );
}
