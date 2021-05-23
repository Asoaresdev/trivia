import styled from 'styled-components';
import Button from '@material-ui/core/Button'


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;
    h1 {
        padding: 2.5rem 0 0 0;
        font-size: 2rem;
    }
`

export const ParagraphQuestion = styled.p`
    padding: 0 0 2rem 0;
    font-size: 1.25rem;
    margin: 0;

`

export const ContainerInputButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px dashed lightgray;
    min-height:25vh ;
    padding: 4rem;
    border-radius: 0.4rem;
    
`

export const ButtonStyles = styled(Button)`
    height: 2.4rem;
    
`

export const FormStyle = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Warning = styled.p`
    padding-top: 0.5rem;
    color: red;

`