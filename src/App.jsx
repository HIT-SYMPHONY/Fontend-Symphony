// File: D:/HIT15-ReactJS -Project/src/App.jsx
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginPage";
import Confirm from "./components/FixPassword";
import CheckEmail from "./components/FixEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/FixPassword" element={<Confirm />} />
    </Routes>
  );
}

export default App;
