import React, { useState, useEffect } from "react";
import { app } from "../../../firebaseconfig"

//For Authentication
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser = () => {
  const auth = getAuth();
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setInput({ ...input, ...newInput });
  };

  const handleSubmit = () => {

    //Authentication
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <input placeholder="Enter your email" name="email" onChange={(event)=>handleInput(event)} />
      <input placeholder="ENter your password " name="password" onChange={(event)=>handleInput(event)}/>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};


export default CreateUser