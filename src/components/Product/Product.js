import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const{product,handleAddToCart}=props;
    const {name,img,seller,price,ratings}=product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>ADD TO CART</p>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;