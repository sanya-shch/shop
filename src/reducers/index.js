import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import shopReducer from './shopReducer';
import langReducer from './langReducer';
import basketReducer from './basketReducer';
import orderReducer from './orderReducer';
import totalPriceReducer from "./totalPriceReducer";

export default combineReducers({
    shop: shopReducer,
    basket: basketReducer,
    totalPrice: totalPriceReducer,
    order: orderReducer,
    form: formReducer,
    lang: langReducer
});