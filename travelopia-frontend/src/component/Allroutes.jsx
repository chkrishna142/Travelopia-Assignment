import React from "react";
import { Route, Routes } from "react-router-dom";
import Formtoinput from "./Formtoinput";
import Dashboard from "./Dashboard";
function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Formtoinput />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default Allroutes;
