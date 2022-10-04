import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{handelAddToCart,product}=props
    const {name, price,seller,img} = product
  

    return (
        <div className='product'>
           <div>
            <img src={img} alt="" />
                <div className='info'>
                    <h2>{name}</h2>
                    <p>{seller}</p> 
                    <h3 className='price'>Price: ${price}</h3>
                </div>
                    <button onClick={()=>handelAddToCart(product)} className='cart'>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
           </div>
        </div>
    );
};

export default Product;