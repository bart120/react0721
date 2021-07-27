import React, { Component } from 'react'
import CarsService from '../../core/services/CarsService';
import { Table } from 'react-bootstrap';

export default class CarList extends Component {

    servCar = new CarsService();

    state = { cars: [] };

    componentDidMount() {
        this.servCar.getCars().then(data => {
            this.setState({ cars: data.sort((a, b) => { return a.price > b.price ? -1 : 1 }) });
        });
    }

    dateFormat = (value) => {
        return new Date(value).toLocaleDateString('fr-FR');
    }

    render() {
        return (
            <div>
                <h1>Les voitures</h1>
                <Table bordered striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modèle</th>
                            <th>Prix</th>
                            <th>Date de mise en circulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(car => {
                            return (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.model}</td>
                                    <td>{car.price} €</td>
                                    <td>{this.dateFormat(car.dateOfCirculation)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
