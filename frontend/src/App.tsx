import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { ADD_SALE, EDIT_SALE, HOME } from './routes/routes.ts';
import HomePage from './features/home/HomePage.tsx';
import AddSalePage from './features/sale/AddSalePage.tsx';
import EditSalePage from './features/sale/EditSalePage.tsx';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={ADD_SALE} element={<AddSalePage />} />
      <Route path={`${EDIT_SALE}:id`} element={<EditSalePage />} />
    </Routes>
  );
}

export default App;
