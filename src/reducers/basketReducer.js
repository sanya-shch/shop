import {Map} from 'immutable';
import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CLEAN_BASKET
} from '../actions/types';

const initialState = Map();

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return state.update(action.payload, (value = 0) => value + 1);
        case REMOVE_FROM_BASKET:
            return state.get(action.payload) === 1 ? state.delete(action.payload) : state.update(action.payload, value => value - 1);
        case CLEAN_BASKET:
            return state.clear();
        default:
            return state;
    }
};