import React from "react";
import CreateUser from "./Firebase/createUserWithEmailAndPassword";
import SignInUser from "./Firebase/signInUserWithEmaiAndPassword";
import GoogleSignIn from './Firebase/GoogleProvider'
import Doc from './Database/AddAndGetDocs'
import { Card } from "./Card";

export const App = () => {
  return (
    <div>
      {/* <CreateUser />
      <SignInUser />
      <GoogleSignIn/> */}
      <Doc/>
    </div>
  );
};
