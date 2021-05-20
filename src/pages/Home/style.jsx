import styled from 'styled-components';
import Button from '@material-ui/core/Button'


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        padding: 2.5rem 0 0 0;
        font-size: 2rem;
    }
    h3 {
        padding: 2rem 0 3rem 0;
    }
`

export const ContainerInputButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 1px dashed lightgray;
    min-height:25vh ;
    padding: 2rem;
    border-radius: 0.4rem;
`

export const ButtonStyles = styled(Button)`
    height: 2.4rem;
`
