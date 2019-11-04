import {
    ADD_TO_TOTAL_PRICE,
    REMOVE_FROM_TOTAL_PRICE,
    CLEAN_TOTAL_PRICE
} from '../actions/types';

const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TOTAL_PRICE:
            return state === 0 ? state = action.payload : state = `${state.slice(0, -1)*1 + action.payload.slice(0, -1)*1}${action.payload.slice(-1)}`;
        case REMOVE_FROM_TOTAL_PRICE:
            return action.payload.slice(0, -1)*1 === 0  ?  state = 0 : state = `${state.slice(0, -1)*1 - action.payload.slice(0, -1)*1}${action.payload.slice(-1)}`;
        case CLEAN_TOTAL_PRICE:
            return 0;
        default:
            return state;
    }
};