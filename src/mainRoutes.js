import React from "react";
import { Routes, Route } from "react-router-dom";
import { Card } from "./Card";

export const mainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="card/:userId" element={<Card />} />
      </Routes>
    </div>
  );
};
