import React, { useState } from "react";
import {FormProvider} from './formProvider'
import HeroImg from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import ReduxFormStep1 from "./ReduxFormStep1";
import ReduxFormStep2 from "./ReduxFormStep2";
import ReduxFormStep3 from "./ReduxFormStep3";
import ReduxFormStep4 from "./ReduxFormStep4";
import ReduxFormStep5 from "./ReduxFormStep5";
import Contact from './Contact'
import firebase from 'firebase'
import {useSelector} from 'react-redux'

export default function OddajRzeczy() {
  const form = useSelector(state => state.form)
  const db = firebase.database()
  const handleSendForm = () => {
    db.ref('forms/').push(form)
    console.log("poszlo"); 
  }

  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    step < 6 ? setStep((prev) => prev + 1) : setStep(1);
  };
  const handlePrevStep = () => {
    step < 6  ? setStep((prev) => prev - 1) : setStep(1);
  };
  return (
    <>
    <FormProvider>
      <div className="headerContainer">
        <img alt="nieuzywane rzeczy" src={HeroImg} />
        <div className="header">
          <h1>Oddaj rzeczy, których juz nie chcesz</h1>
          <h1>POTRZEBUJĄCYM</h1>
          <img className="decoration" src={decoration} alt="" />
          <h1>Wystarczą 4 proste kroki</h1>
          <div className={'stepsForm'}>
         <div >
           <h1>1</h1>
           <p>Wybierz rzeczy</p>
         </div>
         <div>
           <h1>2</h1>
           <p>Spakuj je w worki</p>
         </div>
         <div>
           <h1>3</h1>
           <p>Wybierz fundację</p>
         </div>
         <div>
           <h1>4</h1>
           <p>Zamów kuriera</p>
         </div>
          </div>
        </div>
      </div>
      
      
      <div className="reduxFormBackground">
        {
          {
            1: <ReduxFormStep1  />,
            2: <ReduxFormStep2 />,
            3: <ReduxFormStep3 />,
            4: <ReduxFormStep4 />,
            5: <ReduxFormStep5 />,
          }[step]
        }
        {step > 1 ? <button onClick={handlePrevStep}>Wstecz</button> : ''}
        {step < 5 ?<button onClick={handleNextStep}>Dalej</button>:<button onClick={handleSendForm}>Wyslij</button>}
        
      </div>
      </FormProvider>
      <Contact/>
    </>
    
  );
}
