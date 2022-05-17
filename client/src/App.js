import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Api from "./components/Api";
import Summoner from "./components/Summoner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Api />} />
      <Route path="/summoner" element={<Summoner />} />
    </Routes>
  );
}

export default App;
