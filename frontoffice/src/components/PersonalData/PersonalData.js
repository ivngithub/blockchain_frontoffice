import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PersonalData extends React.Component {

    render() {
        return (
            <div className="page-body">
                <h3>Personal data</h3>
                <Form>
                    <FormGroup>
                        <Label for="personalName">Name</Label>
                        <Input type="text" name="name" id="personalName" placeholder="Your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="personalEmail">Email</Label>
                        <Input type="email" name="email" id="personalEmail" placeholder="Your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="personalPassword">Password</Label>
                        <Input type="password" name="password" id="personalPassword" placeholder="password" />
                    </FormGroup>
                    <Button>Submit</Button>
                    </Form>
            </div>
        );
    }
}

export { PersonalData }
