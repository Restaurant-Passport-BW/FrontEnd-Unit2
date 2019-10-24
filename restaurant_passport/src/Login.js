import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import bg from "./food.jpg";



const Login = (props) => {
  return (
    <div>
    <Form inline>
    <div className="header">
                <h1>Welcome Back!</h1>
                </div>
    <div className="Forms">         
      <FormGroup>
        <Label for="exampleEmail" hidden>
        <div className="inputName">Email</div></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
        <div className="inputName">Password</div></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
      </div>
    </Form>
    
    <div className="footer">
        Restaurant Passport @2019
    </div>
    </div>
  );
}

export default Login;