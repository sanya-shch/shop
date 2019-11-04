import {
    SET_LANG
} from '../actions/types';

const initialState = 'en';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return action.payload;
        default:
            return state;
    }
};