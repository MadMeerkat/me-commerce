import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

import './CartWidget.css';

//ES PARTE DEL SWITCH

const CartWidget = ({color,size,ClassNames,quantityItems}) =>{

    return (
        <>
            <div className={ClassNames}>
                <FaShoppingCart color={color} size={size}/><span className='quantity-items'>{quantityItems}</span>
            </div>
        </>
    )

}


CartWidget.defaultProps ={
    color:'#fff',
    size:20,
    ClassNames:'',
    quantityItems:0
};


export default CartWidget ;