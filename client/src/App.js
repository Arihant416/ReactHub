import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbars from './Comps/Navbar';
import Home from './Comps/Home';
import SignUp from './Comps/SignUp';
import Login from './Comps/Login';
import Profile from './Comps/Profile';
import Upload from './Comps/Upload';
import About from './Comps/About';
import UserProfile from './Comps/UserProfile';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext();
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/mypost" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/newpost" component={Upload} />
      <Route exact path="/profile/:id" component={UserProfile} />
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbars />
        <Route path="/about" component={About} />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
