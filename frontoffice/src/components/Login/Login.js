import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';

async function loginUser(credentials) {
    return fetch('http://localhost:8000/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(error => console.log('Error is', error));
   }
   
export default function Login({ setToken }) {
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {   
        e.preventDefault();
        const response = await loginUser({
            user: {
                email,
                password
            }
        });
        if (response.errors) {
            console.log(JSON.stringify(response.errors));
        }
        else {
            console.log(response.user.token);
            setToken(response.user.token);
        }
    }

    return (
        <div className="login-wrapper" style={{marginTop: '150px'}}>
            <h1>Please Log In</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="userName">Username:</Label>
                    <Input type="text" name="name" id="userlName" placeholder="username" onChange={e => setUserName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userPassword">Password:</Label>
                    <Input type="password" name="password" id="userPassword" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
                
                <Button type="submit">Submit</Button>
                <NavLink style={{padding: '15px 0px'}} href="/registration">Register now</NavLink>
            </Form>
        </div>
    );

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
