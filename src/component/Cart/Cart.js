import React from 'react';

const Cart = (props) => {
    // const products = props.cart
    // console.log(props.cart)
    let price = 0
    let text = 0
    let shipping = 0
    for(const product of props.cart){
        console.log(product)
        price = price + parseFloat(product.price)
        shipping = shipping + parseFloat(product.shipping)
        

    }
    const total = price + shipping
    const tax = (total * 0.02).toFixed(2)
    const GTotal = total + tax
    return (
        <div className='cart'>
            <p>Selected Item :{props.cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${GTotal}</h3>
        </div>
    );
};

export default Cart;