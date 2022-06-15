import React, { useEffect, useState } from 'react'
import { getFetchItem } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail';


 const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    console.log(item);
    useEffect(() => {
        getFetchItem()
            .then((resp) => setItem(resp))
            .catch(err => console.log(err))

    }, []);
    
    return <ItemDetail item={item}/>
}

export default ItemDetailContainer;