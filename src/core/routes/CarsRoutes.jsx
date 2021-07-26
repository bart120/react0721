import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarList from '../../pages/cars/CarList';
import CarAdd from '../../pages/cars/CarAdd';

export default class CarsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cars/add" exact component={CarAdd} />
                <Route path="/cars/list" exact component={CarList} />
            </Switch>
        )
    }
}
