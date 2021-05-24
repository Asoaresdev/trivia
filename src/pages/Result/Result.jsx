import React from 'react'
import { Link } from 'react-router-dom';
import { Container, ContainerTable, ButtonsStyle } from './style'

export default function Result() {

    const options = JSON.parse(localStorage.getItem('userOptions'))

    const questions = Object.keys(options)

    // eslint-disable-next-line array-callback-return
    const result = questions.filter((key) => {
        if(options[key].correctAnswer === options[key].selectedAnswer){
            return options[key].selectedAnswer
        } 
    })
    

    const percentage = result.length/questions.length * 100
    

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
                {percentage >= 50 ? <p>😀</p> : <p>😯</p> }
                <p>Você acertou {percentage.toFixed()}%  <br></br>{result.length} acerto(s) de {questions.length} pergunta(s)</p>   
                
                </div>
            <ContainerTable>
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
                           <td >{options[key].question}</td> 
                           <td >{options[key].correctAnswer}</td> 
                           <td >{options[key].selectedAnswer}</td> 
                           {options[key].correctAnswer === options[key].selectedAnswer ? <td style={{width:50}}>✔</td> : <td >❌</td> }
                        </tr>
                    )
                })}
                 </tbody>
            </ContainerTable>
        </Container>
    )
}
