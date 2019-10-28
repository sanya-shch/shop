import {setLang} from "../actions/langActions";
import langReducer from "./langReducer";

it('lang must be properly modified  to "ua"', () => {
    const action = setLang('ua');

    const state = {
        lang: 'en'
    };

    const newState = langReducer(state, action);

    expect(newState.lang).toBe('ua');
});