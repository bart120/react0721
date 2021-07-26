import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export default class Footer extends Component {

    state = { brands: [], ageDuCapitaine: 42 }

    componentDidMount() {
        //state = { brands: [{name='toto', }]}
        this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }
            ]
        });
    }

    render() {
        return (
            <footer>
                <div>&copy; Formation React</div>
                <Row>
                    {this.state.brands.map((item) =>
                    (<Col>
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
