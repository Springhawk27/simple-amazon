import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    const [displayProducts, setDisplayProducts] = useState([])


    // const displayProducts

    // useEffect(() => {
    //     console.log("product API Called");
    //     fetch('./products.JSON')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    useEffect(() => {
        // console.log("product API Called");
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log("product recieved");
                setDisplayProducts(data);
            })
    }, [])

    useEffect(() => {
        // console.log("L s called")
        if (products.length) {
            const savedCart = getStoredCart();
            // console.log(savedCart)

            const storedCart = [];

            for (const key in savedCart) {
                // console.log(savedCart[key])

                // console.log(key, savedCart[key])

                // console.log(key)
                // console.log(products)
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storedCart.push(addedProduct);

                }

            }
            setCart(storedCart);
        }
    }, [products])




    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage for now
        addToDb(product.key);
    }

    const handleSearch = event => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        // setProducts(matchedProducts)
        setDisplayProducts(matchedProducts);

        console.log((matchedProducts.length))
    }


    return (
        //fragment
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product"

                ></input>
            </div>
            <div className="shop-container">

                <div></div>

                <div className="product-container">
                    {/* <h3>Products: {products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="regular-button">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;