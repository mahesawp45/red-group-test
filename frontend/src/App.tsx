import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { ADD_SALE, HOME } from './routes/routes.ts';
import HomePage from './features/home/HomePage.tsx';
import AddSalePage from './features/sale/AddSalePage.tsx';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={ADD_SALE} element={<AddSalePage />} />
    </Routes>
  );
}

export default App;
