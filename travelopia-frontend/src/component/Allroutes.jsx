import React from "react";
import { Route, Routes } from "react-router-dom";
import Formtoinput from "./Formtoinput";
import Dashboard from "./Dashboard";
import Loader from "./Loader";
import Loaded from "./Loaded";
function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Formtoinput />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/loader" element={<Loader />}></Route>
      <Route path="/loaded" element={<Loaded />}></Route>
    </Routes>
  );
}

export default Allroutes;
