import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);

    const { name, img, price, stock, seller, star } = props.product;
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-button">{cartIcon} Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;



