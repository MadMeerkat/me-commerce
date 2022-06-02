import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './ItemListContainer.css';



const ItemListContainer = ({ greeting }) => {
    console.log(greeting)
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                            <div className='gretting'>
                                <h1>{greeting}</h1>
                            </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

ItemListContainer.defaultProps = {
    color:'#fff',
    size:20,
    ClassNames:'',
    quantityItems:0
};


ItemListContainer.defaultProps = {
    greeting:'Hola :D!',
};


export default ItemListContainer;