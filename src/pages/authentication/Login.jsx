import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import InputMail from '../../core/components/forms/InputMail'

export default class Login extends Component {



    log = { login: '', password: '' };

    constructor() {
        super();
        //this.changeFormField = this.changeFormField.bind(this);
        const user = JSON.parse(sessionStorage.getItem('USER'));
        if (user) {
            this.state = { user: user };
        } else {
            this.state = { user: null }
        }
    }

    changeFormField = (ev) => {
        //console.log(ev);
        //console.log("this", this);
        //this.mail = ev.target.value;
        this.log[ev.target.name] = ev.target.value;
    }

    submit = (ev) => {
        ev.preventDefault();
        //console.log(this.user);
        //appel serveur
        const user = { login: this.log.login, name: 'Bob' };
        sessionStorage.setItem('USER', JSON.stringify(user));
        this.setState({ user: user });
    }

    logout = () => {
        sessionStorage.clear();
        this.setState({ user: null });
    }

    render() {
        return (
            <div>
                <h1>Authentification</h1>
                {this.state.user != null ?
                    <div>
                        Bonjour {this.state.user.name}
                        <div>
                            <button className="btn btn-secondary" onClick={this.logout}>Se déconnecter</button>
                        </div>
                    </div>
                    :
                    <Form noValidate onSubmit={this.submit}>
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            {/*<Form.Control type="email" placeholder="Votre email" name="login" onChange={this.changeFormField} />*/}
                            <InputMail placeholder="Votre email" name="login" onTextChange={this.changeFormField} validate />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Votre mot de passe" name="password" onChange={this.changeFormField} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Se connecter</Button>
                    </Form>
                }
            </div>
        )
    }
}
