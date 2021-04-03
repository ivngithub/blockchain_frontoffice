import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import { Button, Form, FormGroup, Label, Input, NavLink, FormText, Alert} from 'reactstrap';

async function registrationUser(credentials) {
    return fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(error => console.log('Error is', error));
   }
   
export default function Registration({ setToken }) {
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [useremail, setUserEmail] = useState();
    const [errors, setErrors] = useState();

    const handleSubmit = async e => {
    e.preventDefault();

    const data = {
        user: {
            username: username,
            password: password,
            email: useremail
        }
    }
    const response = await registrationUser(data);
    
    if (response.errors) {

            console.log(JSON.stringify(response.errors));
            setErrors(JSON.stringify(response.errors));

        }
        else {
            console.log(response.user.token);
            setToken(response.user.token);
        }
    }
    
    return (
        <div className="login-wrapper" style={{marginTop: '150px'}}>
            {errors ? <Alert color="danger" style={{position: 'absolute', zIndex: '100', marginTop: '-100px'}}><strong>You have some errors:</strong> "{errors}"</Alert>  : null} 
            <h1>Registration form</h1>     
            <Form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                <FormGroup>
                    <Label for="userName">Username:</Label>
                    <Input type="text" name="name" id="userlName" placeholder="What's your name?" onChange={e => setUserName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userName">Email:</Label>
                    <Input type="text" name="email" id="userlEmail" placeholder="What's your email?" onChange={e => setUserEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userPassword">Password:</Label>
                    <Input type="password" name="password" id="userPassword" placeholder="Come up with a password." onChange={e => setPassword(e.target.value)}/>
                    <FormText color="muted">
                        min_length=8, max_length=128
                    </FormText>
                </FormGroup>
                
                <Button type="submit">Submit</Button>
                <NavLink style={{padding: '15px 0px'}} href="/login">Login now</NavLink>
            </Form>
        </div>
    );
}
