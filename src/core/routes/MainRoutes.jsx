import React, { Component } from 'react';
import CarList from '../../pages/cars/CarList';
import CarAdd from '../../pages/cars/CarAdd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../pages/authentication/Login';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/home/NotFound';

export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cars/add" exact component={CarAdd} />
                <Route path="/cars/list" exact component={CarList} />
                <Route path="/auth/login" exact component={Login} />
                <Route path="/404" exact component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        )
    }
}
