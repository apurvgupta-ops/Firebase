import React from "react";
import { Link } from "react-router-dom";
export const Card = ({ id, userId }) => {
  return (
    <Link to={`card/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{id}</div>
          <p className="text-gray-700 text-base">
          {userId.email}
          </p>
          <p className="text-gray-700 text-base">
          {userId.passwor}
          </p>
        </div>
       
      </div>
    </Link>
  );
};
