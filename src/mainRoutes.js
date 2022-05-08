import React from "react";
import { Routes, Route } from "react-router-dom";
import { Card } from "./Card";
import Doc from "./Database/CRUD";


export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Doc />} />
        <Route path="card" element={<Card />} />
        <Route path="card/:cardId" element={<Card />} />
      </Routes>
    </div>
  );
};
