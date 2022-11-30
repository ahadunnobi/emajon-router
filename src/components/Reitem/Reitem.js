import React from 'react';
import './Reitem.css'
import { RiDeleteBin5Line } from 'react-icons/ri';

const Reitem = ({product,handleRemoveItem}) => {
        const {name, img, price, shipping, quantity, id} =product;
        return (
                <div className='review-item'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="review-details-container">
                    <div className="review-details">
                        <p>{name}</p>
                        <p><small>Price: ${price}</small></p>
                        <p><small>Shipping: ${shipping}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                    <div className="delete-container">
                        <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                            <RiDeleteBin5Line className='delete-icon'></RiDeleteBin5Line>
                        </button>
                    </div>
                </div>
            </div>
        );
};

export default Reitem;