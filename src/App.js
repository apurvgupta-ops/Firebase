import React from "react";
import CreateUser from "./Firebase/createUserWithEmailAndPassword";
import SignInUser from "./Firebase/signInUserWithEmaiAndPassword";
import GoogleSignIn from './Firebase/GoogleProvider'
import Doc from './Database/AddAndGetDocs'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      {/* <CreateUser />
      <SignInUser />
      <GoogleSignIn/> */}
      <Doc/>
    </div>
  );
};
