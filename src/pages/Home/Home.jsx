import React from 'react'
import Header from '../Header/Header'
import TextField from '@material-ui/core/TextField'
import { Container, ContainerInputButton, ButtonStyles } from './style'

export default function Home() {
    return (
        <div>
            <Header />
            <Container>
                <h1>Conhecimentos Gerais</h1>
                <h3>Quantas perguntas você quer responder?</h3>

                <form 
                    // onSubmit={ submitForm }
                >
                    <ContainerInputButton>
                    <TextField
                        required
                        label="Número"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <ButtonStyles 
                        variant="contained" 
                        color="secondary"
                    >
                        OK
                    </ButtonStyles>
                    </ContainerInputButton>
                </form>   
            </Container>
        </div>
    )
}
