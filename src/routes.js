import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentation/navigation.component';
import Home from './presentation/home.component';
import Contact from './presentation/contact.component';
import NotFound from './presentation/not.found.component';


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);