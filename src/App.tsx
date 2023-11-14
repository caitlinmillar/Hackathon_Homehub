import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userContext } from "./context/userContext";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import LandingPage from './pages/landingPage';

function App() {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<LandingPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
