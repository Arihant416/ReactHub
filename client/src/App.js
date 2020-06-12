import React from 'react';
import Header from './myComponents/Header';
import Landing from './myComponents/Landing';
import Login from './myComponents/Login';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
