import React from 'react';
import Header from './myComponents/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
