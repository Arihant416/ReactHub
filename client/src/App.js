import React from 'react';
import Header from './myComponents/Header';
import Landing from './myComponents/Landing';
import Login from './myComponents/Login';
import Signup from './myComponents/SignUp';
import NewPost from './myComponents/NewPost';
import Profiles from './myComponents/MyProfile';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/newpost' component={NewPost} />
      <Route path='/myposts' component={Profiles} />
    </BrowserRouter>
  );
}

export default App;
