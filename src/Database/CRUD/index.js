import React, { useState, useEffect } from "react";
import { app } from "../../firebaseconfig";
import { database } from "../../firebaseconfig";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Card } from "../../Card";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Doc = () => {
  const [input, setInput] = useState("");
  const collectionRef = collection(database, "users");
  const navigate = useNavigate();
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
    getDoc(doc(database, "users", "F6GLWI817NfmVBRDQpxh"))
      .then((res) => {
        console.log("data is", res.data());
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getDatas = () => {
    //GET DATA FROM THE DATABASE
    // getDocs(collectionRef).then((res) => {
    //   setUserId(
    //     res.docs.map((doc) => {
    //       return { ...doc.data(), id: doc.id };
    //     })
    //   );
    // });
  };

  //UPDATE DATA IN THE DATABASE
  const updataData = () => {
    const docTOUpdate = doc(database, "users", "n58gtk1rzKLVm0rHKhOC");
    updateDoc(docTOUpdate, {
      email: "heyy@gmail.com",
    })
      .then((res) => {
        alert("data updated");
      })
      .catch((err) => {
        alert("data failed to update");
      });
  };

  //DELETE DATA FROM THE DATABASE
  const deleteData = () => {
    const docTODelete = doc(database, "users", "4eVEE9tBsTHJDMV2NFkt");
    deleteDoc(docTODelete)
      .then((res) => {
        alert("doc deleted ");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // console.log("sdofnkl")
  return (
    <>
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

        <button type="submit" onClick={addData} className="border-2">
          Add Data
        </button>
        <button type="submit" onClick={getData} className="border-2">
          Get Data
        </button>
        <button type="submit" onClick={getDatas} className="border-2">
          Get Datas
        </button>
        <button type="submit" onClick={updataData} className="border-2">
          Update Data
        </button>
        <button type="submit" onClick={deleteData} className="border-2">
          Delete Data
        </button>
      </div>
      <div>
        <button onClick={() => navigate("card")}>Card </button>
      </div>
    </>
  );
};

export default Doc;
