import React, { useEffect, useState } from 'react';
import { addToLS, GetDataFromLS } from '../../utilities/AddToLocalStroge';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect(() => {
        const storedCart = GetDataFromLS()
        const CartProduct = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // console.log(addedProduct)
                CartProduct.push(addedProduct)
            }
            setCart(CartProduct)


        }
    }, [products])

    const handelAddToCart = (sProduct) => {
        // console.log(product)
        let newCart

        const quantity = cart.find(product => product.id === sProduct.id)
        if (!quantity) {
            sProduct.quantity = 1
            newCart = [...cart, sProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== sProduct.id)
            const newQuantity = sProduct.quantity + 1
            sProduct[quantity] = newQuantity
            newCart = [...rest, sProduct]
        }
        newCart = [...cart, sProduct]

        setCart(newCart)
        // console.log(cart)


        addToLS(sProduct.id)

        // addToDb(product.id)


    }

    return (
        <div className='container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handelAddToCart={handelAddToCart}
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