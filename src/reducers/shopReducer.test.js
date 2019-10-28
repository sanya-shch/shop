import { addToBasket, setLoading } from "../actions/shopActions";
import shopReducer from "./shopReducer";

const state = {
    catalog: null,
    loading: false,
    error: null,
    basket: [],
    totalPrice: 0
};

it('length of basket must be incremented', () => {
    const action = addToBasket(1, '150$');

    const newState = shopReducer(state, action);

    expect(newState.basket.length).toBe(1);
    expect(newState.totalPrice).toBe('150$');
});

it('loading must be properly modified  to "true"', () => {
    const action = setLoading();

    const newState = shopReducer(state, action);

    expect(newState.loading).toBe(true);
});