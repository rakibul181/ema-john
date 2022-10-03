import React from 'react';

const Product = (props) => {
    console.log(props.product.img)
    // const {name, price,seller,img} = props.product
    // const {img}= props.product.img
  

    return (
        <div>
             <img src={props.product.img} alt="" />
            <h1>product:</h1> 
            <h3>{}</h3> 
        </div>
    );
};

export default Product;