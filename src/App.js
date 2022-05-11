import React from "react";
import CreateUser from "./Firebase/Authentication/createUserWithEmailAndPassword";
import SignInUser from "./Firebase/signInUserWithEmaiAndPassword";
import GoogleSignIn from './Firebase/Authentication/GoogleProvider'
import Doc from './Database/CRUD'
import { Card } from "./Card";
import Storage from "./Database/Storage";
import { MainRoutes } from "./MainRoutes";
export const App = () => {
  return (
    <div>
      {/* <CreateUser />
      <SignInUser />
      <GoogleSignIn/> */}
      {/* <Doc/> */}
      {/* <Card/> */}
      {/* <Storage/> */}
      <MainRoutes/>
    </div>
  );
};
