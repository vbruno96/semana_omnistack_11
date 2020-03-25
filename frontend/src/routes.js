import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './components/pages/Logon';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import NewIncident from './components/pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}