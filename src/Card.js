import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { database } from "./firebaseconfig";
export const Card = () => {
  const [cardId, setCardId] = useState("");

  console.log(cardId);

  const cardRef = collection(database, "users");
  useEffect(() => {
    getDocs(cardRef).then((res) => {
      setCardId(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <>
      {cardId &&
        cardId.map((res, index) => (
          <Link to={`${res.id}`} key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{res.id}</div>
                <p className="text-gray-700 text-base">{res.email}</p>
                <p className="text-gray-700 text-base">{res.passwor}</p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};
