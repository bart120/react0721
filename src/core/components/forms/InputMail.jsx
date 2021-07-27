import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class InputMail extends Component {

    //inValid = false;
    state = { inValid: false };

    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        validate: PropTypes.bool,
        onTextChange: PropTypes.func
    }

    change = (ev) => {
        const val = ev.target.value;
        if (this.props.validate) {
            const test = regMail.test(val);
            this.setState({ inValid: !test });
        }

        this.props.onTextChange(ev);
        /*if (!test) {
            //this.inValid = true;
            console.log(this.inValid);
            //this.render(); //NE PAS FAIRE
            //this.state.inValid = true; NE PAS FAIRE
            this.setState({ inValid: true });
        } else {
            this.setState({ inValid: false });
        }*/
    }

    render() {
        //console.log(this.props);
        return (
            <Form.Control type="email" name={this.props.name} placeholder={this.props.placeholder} onChange={this.change} isInvalid={this.state.inValid} ></Form.Control>
        )
    }
}
