import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './ItemListContainer.css';
import ItemCount from '../itemCount';
import ItemList from '../itemList/ItemList';
import { getFetch } from '../../helpers/getFetch';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getFetch()

                .then((response) => {
                    setItems(response)
                })

                .catch(
                    err => console.log(err)
                )

        }, 2000);
    }, [])


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
                        <ItemCount initial={5} stock={10} />
                    </Col>
                </Row>
                <Row>
                    <ItemList items={items} columnas={items.length} />
                </Row>
            </Container>
        </>
    )
}

ItemListContainer.defaultProps = {
    color: '#fff',
    size: 20,
    ClassNames: '',
    quantityItems: 0
};


ItemListContainer.defaultProps = {
    greeting: 'Hola :D!',
};


export default ItemListContainer;