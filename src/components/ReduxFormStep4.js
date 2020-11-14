import React, { useState } from 'react'

export default function ReduxFormStep4() {

    const [step4,setStep4] = useState("")
    const handleStep4 = (event) => {
        setStep4(
            {
                ...step4,
                [event.target.name]:event.target.value
            }
        )
    }
    return (
        <div className="reduxForm">
            <h1>Podaj adres, oraz termin odbioru rzeczy przez kuriera</h1>
            <div>
                <div>
                <p>Ulica</p>
                <input onChange={handleStep4} value={step4.Ulica} name='Ulica' type="text"/>
            </div>
            <div>
                <p>Miasto</p>
                <input onChange={handleStep4} value={step4.Miasto} name='Miasto' type="text"/>
            </div>
            <div>
                <p>Kod pocztowy</p>
                <input onChange={handleStep4} value={step4.Kod_pocztowy} name='Kod_pocztowy' type="text"/>
            </div>
            <div>
                <p>Numer telefonu</p>
                <input onChange={handleStep4} value={step4.Numer_tel} name='Numer_tel' type="text"/>
            </div>
            
            </div>
           
        </div>
    )
}
