import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({product,handleRemoveItem}) => {
    const{name,price,quantity,img,shipping,id}=product;
    return (
        <div>
            <div className='review-item'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='review-details-container'>
                    <div className='review-details'>
                        <p>{name}</p>
                        <p>Price : $<small>{price}</small></p>
                        <p>Shipping : $<small>{shipping}</small></p>
                        <p><small>{quantity}</small></p>
                    </div>
                    <div className="delete-container">
                        <button
                            onClick={()=>handleRemoveItem(id)}
                        className='btn-delete'>
                            <FontAwesomeIcon
                                className='delete-icon'
                                icon={faTrashAlt}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;