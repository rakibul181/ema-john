import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const[products, setProducts] = useState([])
   

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))

    },[])

    return (
        <div className='container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product ={product}
                        key ={product.id}
                        ></Product>)
                }
                <Product
                products ={products}
                ></Product>
            </div>
            <div className="cart-container">
                cart
            </div>
        </div>
    );
};

export default Shop;