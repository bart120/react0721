import React, { Component } from 'react'
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';

export default class CarDetail extends Component {

    servCar = new CarsService();
    servBrand = new BrandsService();
    //1
    /*state = { car: null, brand: null };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.servCar.getCarById(id).then((data) => {
            this.setState({ car: data });

            this.servBrand.getBrandById(data.brandID).then((dataBrand) => {
                this.setState({ brand: dataBrand });
            });
        });
    }*/

    //2 
    state = { car: null };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.servCar.getCarById(id).then((data) => {
            this.setState({ car: data });

            this.servBrand.getBrandById(data.brandID).then((dataBrand) => {
                this.setState({ car: Object.assign(this.state.car, { brandName: dataBrand.name }) });
            });
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Voiture {this.state.car?.model}</h1>
                <p>{this.state.car?.price} €</p>
                <p>{this.state.car?.dateOfCirculation}</p>
                <p>{/*1 this.state.brand?.name*/}</p>
                <p>{this.state.car?.brandName}</p>
            </div>
        )
    }
}
