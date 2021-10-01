import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)

    const { cart } = props;
    // console.log(cart)

    // console.log(props);
    // console.log(props.children);



    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        // console.log(product)
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    // const totalReducer = (previous, product) => previous + product.price
    // const total = cart.reduce((previous, product) => previous + product.price, 0)
    // const total = cart.reduce(totalReducer, 0)

    // const shipping = 15;
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax

    return (
        <div>
            <h4>Order Summary</h4>
            {/* <h5>Items Ordered: {props.cart.length}</h5> */}
            <h5>Items Ordered: {totalQuantity}</h5>
            <h4>Total: {total.toFixed(2)}</h4>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {
                props.children
            }


        </div>
    );
};

export default Cart;