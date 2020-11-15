import React, { useState } from "react";
import {FormProvider} from './formProvider'
import HeroImg from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import ReduxFormStep1 from "./ReduxFormStep1";
import ReduxFormStep2 from "./ReduxFormStep2";
import ReduxFormStep3 from "./ReduxFormStep3";
import ReduxFormStep4 from "./ReduxFormStep4";
import ReduxFormStep5 from "./ReduxFormStep5";

export default function OddajRzeczy() {

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
          <div>
            <h2>Wystarczą 4 proste kroki</h2>
          </div>
        </div>
      </div>
      <div className="important">
        <h1>Wazne !</h1>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać
        </p>
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
        {step < 5 ?<button onClick={handleNextStep}>Dalej</button>:<button>Wyslij</button>}
        
      </div>
      </FormProvider>
    </>
    
  );
}
