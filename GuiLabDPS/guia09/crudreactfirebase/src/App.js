//import logo from './logo.svg';
import React from "react";
import Alumno from "./componentes/Alumno";
import './App.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">
    <div className="row">
      <Alumno />
    </div>
    <ToastContainer />
  </div>
  );
}

export default App;
