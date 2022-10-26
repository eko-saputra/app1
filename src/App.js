import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './components/Home';
import Animes from './components/Animes';
import Admin from './components/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Anime Collection</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item"><Link to="/">Home</Link></li>
                <li className="list-group-item"><Link to="/animes">Anime</Link></li>
                <li className="list-group-item"><Link to="/admin">Admin</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/animes/:id" element={Anime} />
              <Route path="/animes" element={<Animes />} />
              <Route path="/admin" element={<Admin />} />
              <Route index element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Anime(props) {
  let { id } = useParams();
  return (
    <h1>Anime {id}</h1>
  );
}