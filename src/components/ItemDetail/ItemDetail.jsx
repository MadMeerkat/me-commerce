import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const ItemDetail = ({ item }) => {

    const { title, descripcion, price, pictureUrl } = item
    console.log("aca" + item.descripcion)
    return (<>
        <div className="item-detail-container">
            <Container>
                <Row>
                    <h2>{title}</h2>
                    <Col sm={6} lg={6}>
                        <div className="item-picture-container">
                            <img src={pictureUrl}></img>
                        </div>
                    </Col>
                    <Col sm={6} lg={6}>
                        <div className="item-data-container">
                            <p>{descripcion}</p>
                            <span>${price}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default ItemDetail;