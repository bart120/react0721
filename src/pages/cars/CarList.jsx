import React, { Component } from 'react'
import CarsService from '../../core/services/CarsService';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CarList extends Component {

    servCar = new CarsService();

    state = { cars: [] };

    componentDidMount() {
        this.servCar.getCars().then(data => {
            this.setState({ cars: data.sort((a, b) => { return a.price > b.price ? -1 : 1 }) });
        });
    }

    delete = (id) => {
        //console.log(id);
        this.servCar.deleteCarById(id).then((data) => {
            alert(`La voiture ${data.model} est supprimée.`);
            //1
            /*this.servCar.getCars().then(data => {
                this.setState({ cars: data.sort((a, b) => { return a.price > b.price ? -1 : 1 }) });
            });*/

            //2
            const tab = this.state.cars;
            tab.splice(tab.findIndex(x => x.id === id), 1);
            this.setState({ cars: tab });
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
                            <th></th>
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
                                    <td>
                                        <Link to={`/cars/detail/${car.id}`} className="btn btn-primary">Détail</Link>
                                        <button className="btn btn-danger" onClick={() => this.delete(car.id)}>Suppr.</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
