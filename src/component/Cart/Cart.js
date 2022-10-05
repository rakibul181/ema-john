import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    let selectedItem = 0
    let price = 0
    let shipping = 0
    for(const product of cart){
        console.log(product)
        selectedItem = selectedItem + product.quantity 
        price = price + parseFloat(product.price)*selectedItem
        shipping = shipping + parseFloat(product.shipping) 
        

    }
    const total = price + shipping
    const tax = (total * 0.02).toFixed(2)
    const GTotal = total + parseFloat(tax)
    return (
        <div className='cart'>
            <p>Selected Item :{selectedItem}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${GTotal}</h3>
        </div>
    );
};

export default Cart;