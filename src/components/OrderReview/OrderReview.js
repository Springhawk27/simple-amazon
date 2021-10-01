import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb, clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const history = useHistory();

    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);

    }

    const handlePlaceOrder = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div></div>

            <div className="product-container">

                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                {/* <h2>Product Length: {products.length}</h2>
                <h3>Cart Length: {cart.length}</h3>
                <h2>This is Order Review</h2> */}

                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="regular-button">Place Order</button>
                </Cart>

            </div>

        </div>
    );
};

export default OrderReview;