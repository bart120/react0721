import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import BrandsService from '../../core/services/BrandsService';
import CarsService from '../../core/services/CarsService';

export default class CarAdd extends Component {

    servBrand = new BrandsService();

    servCar = new CarsService();

    state = { brands: [] };

    car = {};

    submit = (ev) => {
        ev.preventDefault();
        console.log(this.car);
        this.servCar.saveCar(this.car).then((data) => {
            this.props.history.push('/cars/list');
            alert(`La voiture est enregistrée avec l'ID ${data.id}`);
        });
    }

    changeFormField = (ev) => {
        this.car[ev.target.name] = ev.target.value;
    }

    componentDidMount() {
        this.servBrand.getBrands().then((data) => {
            this.setState({ brands: data });
        });
    }


    render() {
        //console.log(this.props);
        return (
            <div>
                <h1>Ajouter une voiture</h1>
                <Form noValidate onSubmit={this.submit}>
                    <Form.Group>
                        <Form.Label>Modèle</Form.Label>
                        <Form.Control type="text" placeholder="Modèle" name="model" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prix</Form.Label>
                        <Form.Control type="currency" placeholder="Prix" name="price" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date de mise en circulation</Form.Label>
                        <Form.Control type="date" placeholder="Mise en circulation" name="dateOfCirculation" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Marque</Form.Label>
                        <Form.Select name="brandID" onChange={this.changeFormField}>
                            {this.state.brands.map(brand => (
                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">Enregistrer</Button>
                </Form>
            </div>
        )
    }
}
