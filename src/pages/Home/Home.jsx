import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../hooks/useForm'
import { goToTriviaPage } from '../../routes/coordinators'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import { Container, ContainerInputButton, ButtonStyles, FormStyle, Warning, ParagraphQuestion } from './style'

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
        event.preventDefault()
        if(form.number > 0 && form.number < 100) {
            goToTriviaPage(history, form.number)
            resetState()
        }else{
                setShowAlert(true)
                resetState()
        }   
    }

    return (
        <div>
            <Container>
                {localStorage.userOptions ?  
                <Link to = { '/result' }>                
                    <ButtonStyles 
                        variant="contained" 
                        color="secondary"
                        size="small"
                    >
                        Resultado anterior
                    </ButtonStyles>
                </Link> : 
                null}
                <h1>Conhecimentos Gerais</h1>
               
                    <ContainerInputButton>
                        <ParagraphQuestion>Quantas perguntas você quer responder?</ParagraphQuestion>
                        <FormStyle onSubmit={ start }>
                        <TextField
                            required
                            id="standard-number"
                            type='number'
                            label="Número"
                            name='number'
                            placeholder='1 a 100'
                            value = { form.number }
                            onChange={ handleInputChange }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            size="small"
                        />
                        <ButtonStyles 
                            variant="contained" 
                            color="secondary"
                            type='submit'
                        >
                        OK
                        </ButtonStyles>

                    </FormStyle> 
                    {showAlert && <Warning>Preencha um valor entre 1 e 999, por favor</Warning>}
                    </ContainerInputButton> 
            </Container>
        </div>
    )
}
