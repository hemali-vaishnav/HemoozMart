import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from '../cart/cart';
import favouriteReducer  from '../favourite/favourite';

const store = configureStore(
    {
        reducer: {
            cart: cartReducer,
            favourite: favouriteReducer,
            
        }
    }
);

export default store;