import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import './index.css';
import App from './App';
import BeerDetailed from "./components/BeerDetailed/BeerDetailed";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound";
import BeerBoard from "./components/BeerBoard/BeerBoard";

localStorage.setItem('pageNumber', 1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index path="" element={<BeerBoard/>} />
                  <Route path=":id" element={<BeerDetailed />} />

              </Route>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
