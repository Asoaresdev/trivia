import React from 'react'
import image from  '../../assets/nazare-tedesco-vila-de-senhora-do-destino-2004-vira-meme-mundial-1476485254931_1080x703.jpg'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Container } from './style'


export default function Error() {
    return (
        <Container>
            <Link to={ "/" }>
                <Button variant="outlined" color="primary">Home</Button>
            </Link>
            <h2>Oohh, não! Algo deu errado</h2>
            <img src={image} alt="" />
        </Container>
    )
}
