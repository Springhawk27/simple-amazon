// purpose - user wnts to add a product
// a) find the place to store the data




// 2.
const addToDb = id => {
    const stored_cart = getDb();
    if (id in stored_cart) {
        stored_cart[id] = stored_cart[id] + 1;
    }
    else {
        stored_cart[id] = 1;
    }
    updateDb(stored_cart);
}
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}



// 1.
const getDb = () => {

    const exists = localStorage.getItem('shopping_cart');
    return exists ? JSON.parse(exists) : {};
}


export { addToDb, }