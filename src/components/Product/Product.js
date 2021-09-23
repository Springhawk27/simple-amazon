import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css'

const Product = (props) => {
    // console.log(props.product);

    const { name, img, price, stock, seller } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />

            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in the stock</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-button">{cartIcon} Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;