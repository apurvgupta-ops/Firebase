import React from "react";
import CreateUser from "./Firebase/createUserWithEmailAndPassword";
import SignInUser from "./Firebase/signInUserWithEmaiAndPassword";
import GoogleSignIn from './Firebase/GoogleProvider'

export const App = () => {
  return (
    <div>
      <CreateUser />
      <SignInUser />
      <GoogleSignIn/>
    </div>
  );
};
