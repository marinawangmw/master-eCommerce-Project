import userReducer from './user/user.reduser';
import cartReducer from './cart/cart.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

