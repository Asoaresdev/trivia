import React from 'react'

export const  useForm = (initialState) => {
    const [ form, setForm ] = React.useState(initialState)

    const onChange = ( name, value ) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const resetState = () => {
        setForm(initialState)
    }
    return{ form, onChange, resetState }
} 
   