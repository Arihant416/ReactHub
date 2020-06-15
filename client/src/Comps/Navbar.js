import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { UserContext } from '../App'
import $ from 'jquery'
const Navbars = () => {
   const history = useHistory();
   const { state, dispatch } = useContext(UserContext);
   const renderList = () => {
      if (state) {
         return [
            <li className="lilink"><Link to="/mypost" style={style}>Profile</Link></li>,
            <li className="lilink"><Link to="/newpost" style={style}>New feed</Link></li>,
            <li className="lilink"><Link to="#" style={style} onClick={() => {
               localStorage.clear()
               dispatch({ type: 'CLEAR' });
               history.push('/login');
            }}>Logout</Link></li>
         ]
      } else {
         return [
            <li className="lilink"><Link to="/login" style={style}>Login</Link></li>,
            <li className="lilink"><Link to="/signup" style={style}>Signup</Link></li>
         ]
      }
   }
   const style = { fontSize: '18px', color: '#eeeeee grey lighten-3' }
   return (
      <div>
         <nav>
            <div className="nav-wrapper #212121 grey darken-4">
               <Link to={state ? "/" : "/login"} className="brand-logo left" style={{ marginLeft: '5px', fontSize: '25px', color: 'teal', paddingTop: '3px' }}>React Hub</Link>
               <ul id="nav-mobile" className="right">
                  {renderList()}
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Navbars
