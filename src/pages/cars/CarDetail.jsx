import React, { Component } from 'react'
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';

export default class CarDetail extends Component {

    servCar = new CarsService();
    servBrand = new BrandsService();

    state = { car: null };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.servCar.getCarById(id).then((data) => {
            this.setState({ car: data });
        });
    }

    render() {
        return (
            <div>
                <h1>Voiture {this.state.car?.model}</h1>
                <p>{this.state.car?.price} €</p>
                <p>{this.state.car?.dateOfCirculation}</p>
                <p>{this.state.car?.brandID}</p>
            </div>
        )
    }
}
