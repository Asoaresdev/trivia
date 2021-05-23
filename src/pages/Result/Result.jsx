import React from 'react'
import { Container, ContainerTable, ButtonsStyle } from './style'
import { Link } from 'react-router-dom';

export default function Result() {

    const options = JSON.parse(localStorage.getItem('userOptions'))

    const questions = Object.keys(options)

    // eslint-disable-next-line array-callback-return
    const result = Object.keys(options).filter((key) => {
        if(options[key].correctAnswer === options[key].selectedAnswer){
            return options[key].selectedAnswer
        } 
    })

    const percentage = result.length/questions.length * 100

    console.log(percentage);
    return (
        <Container>
            <div>
            <Link to = { '/' }>
                        <ButtonsStyle 
                            variant="contained" 
                            color="secondary"
                        >
                            Home
                        </ButtonsStyle>
                    </Link>
                <p>Você acertou {percentage.toFixed()}% <br></br>{result.length} acerto(s) de {questions.length} pergunta(s)</p>   
                
                </div>
            <ContainerTable cellPadding={0}>
                <thead>
                    <tr>
                        <th>Questão</th>
                        <th>Reposta Correta</th>
                        <th>Resposta Selecionada</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(options).map(key => {
                    return(
                        <tr key={key}>
                           <td style={{width:450}}>{options[key].question}</td> 
                           <td style={{width:250}}>{options[key].correctAnswer}</td> 
                           <td style={{width:250}}>{options[key].selectedAnswer}</td> 
                           {options[key].correctAnswer === options[key].selectedAnswer ? <td style={{width:50}}>✔</td> : <td style={{width:50}}>❌</td> }
                        </tr>
                    )
                })}
                 </tbody>
            </ContainerTable>
        </Container>
    )
}
