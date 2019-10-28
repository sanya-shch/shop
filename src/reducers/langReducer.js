import {
    SET_LANG
} from '../actions/types';

const initialState = {
    lang: 'en'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
};