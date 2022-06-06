import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './ItemListContainer.css';
import ItemCount from '../itemCount';



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
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <ItemCount initial={5} stock={10}/>
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