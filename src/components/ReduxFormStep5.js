import React from 'react'
import {useSelector} from 'react-redux'

export default function ReduxFormStep5() {
    const what = useSelector(state => state.form.what.values)
    const howManyBags = useSelector(state => state.form.howManyBags.values)
    const whereAndWhom = useSelector(state => state.form.whereAndWhom.values)
    const contact = useSelector(state => state.form.contact.values)
    
    return (
        <div className="reduxForm">
            <h1>Podsumowanie Twojej darowizny</h1>
        <div>
            <p>Co chcesz przekazać</p>
           <ul>
                {
             Object.entries(what).map((el,i)=>{
                return <li key={i}>{el}</li>
                })
            }
           
           </ul>
        </div>
         <div>
            
           <ul>
                {
             Object.entries(howManyBags).map((el,i)=>{
                return <li key={i}>{el}</li>
                })
            }
           
           </ul>
        </div>
         <div>
            <p>Komu chcesz pomóc?</p>
           <ul>
                {
             Object.entries(whereAndWhom).map((el,i)=>{
                return <li key={i}>{el}</li>
                })
            }
           
           </ul>
        </div>
         <div>
            <p>Dane dla kuriera</p>
           <ul>
                {
             Object.entries(contact).map((el,i)=>{
                return <li key={i}>{el}</li>
                })
            }
           
           </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        
        </div>
    )
}
