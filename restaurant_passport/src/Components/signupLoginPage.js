import React from "react";
import LoginForm from "./login";
import SignupForm from "./signup";
const LoginPage = (props)=> {
    return(  
    <div>
        <h1>FullName</h1>
        <SignupForm/>
        <h1>Email</h1>
        <EmailForm/>
        <h1>Password</h1>
        <PasswordForm {...props}/>
    </div>
      
    )};
  export default LoginPage;