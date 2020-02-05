import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/User/login';

import Home  from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"     exact={true} component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
