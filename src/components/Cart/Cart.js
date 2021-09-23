import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered: {props.cart.length}</h5>
            <h4>Total: {total}</h4>


        </div>
    );
};

export default Cart;