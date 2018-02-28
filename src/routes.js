import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentation/navigation.component';
import Home from './presentation/home.component';
import Contact from './presentation/contact.component';
import NotFound from './presentation/not.found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-container.component';


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries' >
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentsContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);