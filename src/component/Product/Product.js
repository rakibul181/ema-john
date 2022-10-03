import React from 'react';
import './product.css'

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
                    <button onClick={()=>handelAddToCart(product)} className='cart'>Add To Cart</button>
           </div>
        </div>
    );
};

export default Product;