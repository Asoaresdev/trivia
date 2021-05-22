import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Container, ContainerInputButton, ButtonStyles } from './style'
import { useForm } from '../../hooks/useForm';
import { goToTriviaPage } from '../../routes/coordinators'
import { useHistory } from "react-router-dom";

export default function Home() {

    const [ showAlert, setShowAlert ] = React.useState (false)

    const history = useHistory()

    const  { form, onChange, resetState } = useForm({
        number: ''
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target 
        onChange(name, value)
        setShowAlert(false)
    }
  
   const start = (event) => {
    console.log('Aqui');
    if(form.number > 0) {
        goToTriviaPage(history, form.number)
        resetState()
    }else{
            setShowAlert(true)
    }   
   }

    return (
        <div>
            <Container>
                <h1>Conhecimentos Gerais</h1>
                <form 
                    // onSubmit={ handleSubmition }
                >
                    <ContainerInputButton>
                        <h3>Quantas perguntas você quer responder?</h3>
                        <TextField
                            required
                            id="standard-number"
                            type='number'
                            min='0.000001'
                            label="Número"
                            name='number'
                            inputProps={{ pattern:'[0-9]{3}' }} 
                            title='numeros positivos'
                            value = { form.number }
                            onChange={ handleInputChange }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            size="small"
                            placeholder="00"
                            
                        />
                        
                        <ButtonStyles 
                            variant="contained" 
                            color="secondary"
                            onClick = {start}
                        >
                        OK
                        </ButtonStyles>

                    {showAlert && <p>Preencha um valor válido, por favor</p>}
                    </ContainerInputButton>
                </form>  
                
            </Container>
        </div>
    )
}
