import { combineReducers } from 'redux';

const counterPage = (
    state = {
        number: 0,

    },
    action
) => {
    switch (action.type) {
        case 'COUNTER':
            return Object.assign({}, state, {
                number: action.number,
            });

        default:
            return state;
    }
};


const appStore = combineReducers({
    counterPage,
});

export default appStore;
