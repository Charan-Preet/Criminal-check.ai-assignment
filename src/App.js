import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./reuseables/Navbar";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
