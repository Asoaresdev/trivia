import styled from 'styled-components'
import { Button } from '@material-ui/core';

export const Container = styled.section`
    padding: 2rem;
    overflow-y: scroll;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 2rem;
    }
    
    p{
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const ButtonsStyle = styled(Button)`
    width: 7rem;
`

export const ContainerTable = styled.table`
    width: 100%;
    border: 1px dashed lightgrey;

    tr:nth-child(even) {background: #e7e5e5}

    th,td {
            padding: 0.75rem;
            border-bottom: 1px solid lightgrey;

        }
        th {
            color: gray;
            text-transform: uppercase;
            text-align: left;
        }
        td {
            font-size: 0.9rem;
            :last-child{
                text-align: center;
            }
        }
`

