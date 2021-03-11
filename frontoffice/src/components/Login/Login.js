import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        username,
        password
    });
    setToken(token);
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
                </Form>
        </div>
    );

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
