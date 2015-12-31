import React from 'react';
import App from './components/App';
import Top from './components/Top';
import GameTracker from './components/GameTracker';
import {
    Route,
    DefaultRoute,
} from 'react-router';

export default (
    <Route name="top" handler={App} path="/">
        <Route name="game/:gameId" handler={GameTracker}/>
        <DefaultRoute handler={Top}/>
    </Route>
);
