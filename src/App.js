import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { FilmekListPage } from "./FilmekListPage";
import { FilmekSinglePage } from "./FilmekSinglePage";
import { FilmekCreatePage } from "./FilmekCreatePage";
import { FilmekModPage } from "./FilmekModPage";
import { FilmekDeletePage } from "./FilmekDeletePage";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Filmek</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-filmek`} className="nav-link">
              <span className="nav-link">Új Filmek</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<FilmekListPage />} />
          <Route path="/film/:filmId" element={<FilmekSinglePage />} />
          <Route path="uj-filmek" element={<FilmekCreatePage />} />
          <Route path="mod-film/:filmId" element={<FilmekModPage />} />
          <Route path="del-filmek/:filmId" element={<FilmekDeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;
