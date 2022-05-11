import React, { useState, useEffect } from "react";
import { app } from "../../../firebaseconfig";

//For Authentication
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleSignIn = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider()
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setInput({ ...input, ...newInput });
  };

  const handleSubmit = () => {
    //Authentication
    signInWithPopup(auth,googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
       {/* <input
        placeholder="Enter your email"
        name="email"
        onChange={(event) => handleInput(event)}
      />
      <input
        placeholder="ENter your password "
        name="password"
        onChange={(event) => handleInput(event)}
      /> */}

      <button type="submit" onClick={handleSubmit}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
