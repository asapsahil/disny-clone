import React from 'react';
import './App.css';
import Header from './Components/header'
import Home from './Components/home'
import Detail from './Components/detail'
import Login from './Components/login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
