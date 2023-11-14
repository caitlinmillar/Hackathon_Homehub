import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userContext } from "./context/userContext";
import Page1 from "./Page1";
import Page2 from "./Page2";

import "./App.css";

function App() {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
