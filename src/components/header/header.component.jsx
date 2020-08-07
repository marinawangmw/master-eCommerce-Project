import React from 'react';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo' to='/'>
                <Logo />    
            </Link>
        </div>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {currentUser?
                    (<div className='option' 
                        onClick={() => auth.signOut()}>
                    SIGN OUT </div>)
                    : (
                        <Link className='option' to='/signin'> 
                        SIGN IN
                        </Link>)
                } 
                <CartIcon />
            </div>        
        {hidden? null : <CartDropdown />}    
    </div>
);

// user y cart son los keys definidos en el root reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);