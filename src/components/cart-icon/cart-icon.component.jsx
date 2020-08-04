import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCounter}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'> {itemCounter} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToPros = (state) => ({
    itemCounter: selectCartItemsCount(state)
})

export default connect(mapStateToPros,mapDispatchToProps)(CartIcon);