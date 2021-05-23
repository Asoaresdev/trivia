import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container, ContainerButtons, ButtonsStyle, ContainerQuestions } from './style'
import axios from 'axios'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'


export default function StartTrivia() {

    const [options, setOptions] = React.useState({})
    const [listQuestions, setLIstQuestions] = React.useState([])
    const [showButton, setShowBUtton] = React.useState(false)
    const [showStartButton , setShowStartButton] = React.useState(true)

    const pathParams = useParams();

    const questionAnswerOrder = Array.from({length: Number(pathParams.number)}, () => Array.from({length: 50}, () => Math.random()))
    
    const startTrivia = () => {
        axios.get(`https://opentdb.com/api.php?amount=${pathParams.number}`)
        .then((response) => {
            setLIstQuestions(response.data.results)
            setShowBUtton(true)
            setShowStartButton(false)
           
            // setting indexed options with correct answers
            const newOptions = {}
            response.data.results.forEach((item, i) =>
            {
              newOptions[i] = {'question': item.question,'correctAnswer': item.correct_answer, 'selectedAnswer': null}
            })
            setOptions(newOptions)
        })
        .catch((error) => {
            alert('Algo deu errado para acessar as perguntas, tente novamente.')
        })
    }

    const handleChange = (event) => {                      
        event.preventDefault()
        const answerObject = JSON.parse(event.target.value)
        const newOptions = JSON.parse(JSON.stringify(options))
        newOptions[answerObject.question_id].selectedAnswer = answerObject.answer
        setOptions(newOptions)
    }

    
    const allQuestions = listQuestions.map((item, i) => {
        const allAnswers = [...item.incorrect_answers, item.correct_answer].sort((_, j) => .5 - questionAnswerOrder[i][j])
        return(
            <ContainerQuestions key={ item.question }>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        { i+1 } - { item.question }
                    </FormLabel>
                    <RadioGroup aria-label={item.question} name={item.question}  onChange={handleChange}>
                        { allAnswers.map((answer, j) => {

                        const answerJson = JSON.stringify({'question_id': i, 'answer_id':j, 'answer': answer})
                        
                        return (
                            <FormControlLabel key= {answer} value={answerJson} control={<Radio />} label={answer} />
                        )
                    })}
                    </RadioGroup>
                </FormControl>
            </ContainerQuestions>
        )
    })

   const sendAnswers = () => {
    localStorage.setItem('userOptions', JSON.stringify(options))
   }
  
    return (
        <Container>
            {showStartButton &&
            <ContainerButtons>
                <ButtonsStyle 
                    variant="contained" 
                    color="secondary"
                    onClick={ startTrivia }
                >
                    Start
                </ButtonsStyle>
                <Link to = { '/' }>
                    <ButtonsStyle 
                        variant="contained" 
                        color="secondary"
                    >
                        Cancel
                    </ButtonsStyle>
                </Link>
            </ContainerButtons>
            }
            <section>
                { listQuestions ? allQuestions : null }
            </section>
            { showButton &&  
            <ContainerButtons>
                <Link to = { '/result' }>                
                    <ButtonsStyle 
                        variant="contained" 
                        color="secondary"
                        onClick={ sendAnswers }
                    >
                        Send
                    </ButtonsStyle>
                </Link>
                    <Link to = { '/' }>
                        <ButtonsStyle 
                            variant="contained" 
                            color="secondary"
                        >
                            Cancel
                        </ButtonsStyle>
                    </Link>
            </ContainerButtons>
            }   
        </Container>
    )
}
