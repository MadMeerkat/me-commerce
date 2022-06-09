import React from 'react'
import Item from '../Item/Item';
import Col from 'react-bootstrap/esm/Col';

const ItemList = ({ items,columnas }) => {

  return (
    <>
      {items.map((item, idx) => <Col sm={12} lg={12/columnas}>
        <Item key={idx} item={item} />
      </Col>)}
    </>
  )
}


export default ItemList;