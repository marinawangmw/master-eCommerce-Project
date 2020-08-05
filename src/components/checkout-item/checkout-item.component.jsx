import React from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import { subtractItem } from '../../redux/cart/cart.actions';
import { addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, subtractItem }) => {

    const {name, price, quantity, imageUrl} = item

    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={() => subtractItem(item)} className="arrow"> &#10094; </div>
            <span className='value'> {quantity} </span>
            <div onClick={() => addItem(item)} className="arrow"> &#10095; </div>
        </span>
        <span className='price'>{price}</span>
        <div 
            onClick={() => { removeItem(item) }} 
            className='remove-button'>
                &#10005;
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    subtractItem: item => dispatch(subtractItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);