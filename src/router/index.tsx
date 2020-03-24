import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { HomePage, BasePage } from '../components/pages';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <BasePage path="/" exact component={HomePage} />
        </Switch>
    </BrowserRouter>
);