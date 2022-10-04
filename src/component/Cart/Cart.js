import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const{products} = props.cart
    console.log(products)
    let price = 0
    let text = 0
    let Shipping = 0
    for(const product in products){
        price = price + product.price
    }
    return (
        <div className='cart'>
            <p>Selected Item :{props.cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h3>Grand Total: $1559</h3>
        </div>
    );
};

export default Cart;