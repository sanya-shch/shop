import { combineReducers } from 'redux';
import shopReducer from './shopReducer';
import { reducer as formReducer } from 'redux-form'
import langReducer from './langReducer';

export default combineReducers({
    shop: shopReducer,
    form: formReducer,
    lang: langReducer
});