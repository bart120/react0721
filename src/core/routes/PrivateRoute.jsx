import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends Component {
    render() {
        //console.log(this.props);
        return (
            <Route path={this.props.path} exact={this.props.exact} render={() => {
                return (sessionStorage.getItem('USER') != null ?
                    <this.props.component /> :
                    <Redirect to={{ pathname: '/auth/login' }} />)
            }} />
        )
    }
}
