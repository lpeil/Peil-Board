import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store  from './config/store';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
