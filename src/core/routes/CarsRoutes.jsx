import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CarList from '../../pages/cars/CarList';
import CarAdd from '../../pages/cars/CarAdd';
import CarDetail from '../../pages/cars/CarDetail';
import PrivateRoute from './PrivateRoute';

export default class CarsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/cars/list" exact component={CarList} />
                <PrivateRoute path="/cars/add" exact component={CarAdd} role={['admin', 'basic']} />

                {/*<Route path="/cars/add" exact render={() => {
                    return (sessionStorage.getItem('USER') != null ?
                        <CarAdd /> :
                        <Redirect to={{ pathname: '/auth/login' }} />)
                }} />*/}
                <Route path="/cars/detail/:id" component={CarDetail} />
            </Switch>
        )
    }
}
