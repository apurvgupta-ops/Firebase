import React, { useState, useEffect } from "react";
import { app } from "../../firebaseconfig";

const Storage = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setInput({ ...input, ...newInput });
  };

  return (
    <div>
      <input
        placeholder="Enter your email"
        name="email"
        onChange={(event) => handleInput(event)}
      />
      <input
        placeholder="ENter your password "
        name="password"
        onChange={(event) => handleInput(event)}
      />
    </div>
  );
};

export default Storage;
