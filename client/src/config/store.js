import { createStore } from 'redux';

const INITIAL_USER = {
    token: localStorage.token,
    id: null,
    name: null
};

function user(state = INITIAL_USER, action) {
    switch (action.type) {
        case 'LOGIN':
            return { 
                token: action.token, 
                id: action.id, 
                name: action.name
            };
        case 'LOGOUT':
            return { 
                token: null, 
                id: null, 
                name: null
            }
        default:
            return state;
    }
}

const store = createStore(user);

export default store;
