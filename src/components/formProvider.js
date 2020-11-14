import React,{useState,createContext} from 'react'


export const FormContext = createContext()

export const FormProvider = (props) => {
    const [formData,setFormData] = useState({
        dupa:"dupa",
    })
    const handleInput = (event) => {
        console.log("dupa");
        setFormData({
            ...formData,
            [event.target.name]:event.target.value,

        })
    }
    return <FormContext.Provider value={{formData , handleInput}} >
        {props.children}
    </FormContext.Provider>
}