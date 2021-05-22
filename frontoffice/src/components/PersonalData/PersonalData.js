import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class PersonalData extends React.Component {

    constructor(props) {
        super(props);

        this.state ={ data: {} };
    }

    componentDidMount() {
        console.log('componentDidMount for PersonalData')
        fetch('http://localhost:8000/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('access_token')
            },
        })
        .then((response) => response.json())
        .then((data) => this.setState({ data: data.user }))
        .catch(error => console.log('Error is', error));
    }

    render() {
        console.log(this.state);
        const personal = this.state.data;
        return (
            <div className="page-body">
                <h3>Personal data</h3>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input value={personal.username || ''} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Mail</Label>
                        <Input value={personal.email || ''} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Staff</Label>
                        <Input value={personal.is_staff || ''} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Created at</Label>
                        <Input value={personal.created_at || ''} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Updated at</Label>
                        <Input value={personal.updated_at || ''} disabled />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export { PersonalData }
