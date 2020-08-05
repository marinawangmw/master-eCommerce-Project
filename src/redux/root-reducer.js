import userReducer from './user/user.reduser';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig,rootReducer)

