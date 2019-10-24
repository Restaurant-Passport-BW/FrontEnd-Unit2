import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Signup = (props) => {
  return (
    <Form inline>
        <FormGroup>
        <Label for="exampleUsername" hidden>Username</Label>
        <Input type="Username" name="Username" id="exampleUsername" placeholder="Username" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
  );
}

export default Signup;