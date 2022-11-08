import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =0,shipping=0,quantity=0;
    for(const product of cart){
        quantity+=product.quantity;
        total+=product.price*product.quantity;
        shipping+=product.shipping;
    }
    const tax=parseFloat((total*0.10).toFixed(2));
    const grandTotal=total+shipping+tax;
    return (
        <div className='cart'>
            <h1>Order Summary </h1>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;