import React from 'react';
import Header from './myComponents/Header';
import Landing from './myComponents/Landing';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Landing} />
    </BrowserRouter>
  );
}

export default App;
