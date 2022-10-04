import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const[products, setProducts] = useState([])
    const[cart, setCart] =useState([])
   

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))

    },[])

    const handelAddToCart = (product)=>{
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(cart)
    }

    return (
        <div className='container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product ={product}
                        key ={product.id}
                        handelAddToCart ={handelAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3 className='summary'>Order  Summary</h3>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;