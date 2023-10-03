import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import UserDirectory from "./components/UserDirectory/UserDirectory";
import UserData from "./data/userData";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDirectory users={UserData} />} />
        <Route path="/user/:id" element={<UserProfile users={UserData} />} />
      </Routes>
    </Router>
  );
}

export default App;
