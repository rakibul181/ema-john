import React, { useEffect, useState } from 'react';
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
                <h3>Order  Summary</h3>
                <h1>prodct {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;