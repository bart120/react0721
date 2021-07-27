import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import BrandsService from '../../services/BrandsService';

export default class Footer extends Component {

    servBrand = new BrandsService();

    state = { brands: [], ageDuCapitaine: 42 }

    componentDidMount() {
        this.servBrand.getBrands().then((data) => {
            //console.log(data);
            this.setState({ brands: data });
        });

        //this.setState({ brands: data });
        //console.log("fin didMount");
        //state = { brands: [{name='toto', }]}
        /*this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }
            ]
        });*/
    }

    render() {
        return (
            <footer>
                <div>&copy; Formation React</div>
                <Row>
                    {this.state.brands.map((item) =>
                    (<Col key={item.name}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`/images/${item.image}`} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)
                    )}
                </Row>
            </footer>
        )
    }
}
