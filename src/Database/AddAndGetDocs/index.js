import React, { useState, useEffect } from "react";
import { app } from "../../firebaseconfig";
import { database } from "../../firebaseconfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const Doc = () => {
  const [input, setInput] = useState("");
  const collectionRef = collection(database, "users");
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setInput({ ...input, ...newInput });
  };

  const addData = () => {
    // ADD DATA IN THE DATABASE
    addDoc(collectionRef, {
      email: input.email,
      passwor: input.password,
    })
      .then((res) => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getData = () => {
    //GET DATA FROM THE DATABASE
    getDocs(collectionRef).then((res) => {
      console.log(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  //UPDATE DATA IN THE DATABASE
  const updataData =()=>{
    const docTOUpdate = doc(database, 'users', "n58gtk1rzKLVm0rHKhOC")
    updateDoc(docTOUpdate,{
      email:"heyy@gmail.com"
    }).then((res)=>{
      alert("data updated")
    }).catch((err)=>{
      alert("data failed to update")
    })
  }

  //DELETE DATA FROM THE DATABASE
  const deleteData =()=>{
    const docTODelete = doc(database, "users", "4eVEE9tBsTHJDMV2NFkt")
    deleteDoc(docTODelete).then((res)=>{
      alert("doc deleted ")
    }).catch((err)=>{
      alert(err.message)
    })
  }

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

      <button type="submit" onClick={addData}>
        Add Data
      </button>
      <button type="submit" onClick={getData}>
        Get Data
      </button>
      <button type="submit" onClick={updataData}>
        Update Data
      </button>
      <button type="submit" onClick={deleteData}>
        Delete Data
      </button>
    </div>
  );
};

export default Doc;
