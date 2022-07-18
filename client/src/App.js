import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Api from "./pages/Api";
import Summoner from "./pages/Summoner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Api />} />
      <Route path="/summoner" element={<Summoner />} />
    </Routes>
  );
}

export default App;
