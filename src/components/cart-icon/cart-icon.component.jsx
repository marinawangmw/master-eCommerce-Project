import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
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

const mapStateToPros = createStructuredSelector({
    itemCounter: selectCartItemsCount
})

export default connect(mapStateToPros,mapDispatchToProps)(CartIcon);