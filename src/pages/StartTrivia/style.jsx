import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 1.25rem;
        text-align: center;
        font-weight: 700;
        padding: 2.5rem 0;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    width: 20rem;
    justify-content: space-between;
    padding: 1rem 0 2.5rem 0;
`

export const ButtonsStyle = styled(Button)`
    width: 7rem;
`

export const ContainerQuestions = styled.div`
    padding: 1.5rem;
`
