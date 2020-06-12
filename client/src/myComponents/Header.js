// eslint-disable-line no-unused-vars
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//eslint-disable-next-line
import M from 'materialize-css';

export default class Header extends Component {
   componentDidMount() {
      const M = window.M;
      document.addEventListener('DOMContentLoaded', function () {
         var elems = document.querySelectorAll('.sidenav');
         //eslint-disable-next-line
         var instances = M.Sidenav.init(elems, {});
      })
   }
   render() {
      const style = { fontSize: '18px', color: '#eeeeee grey lighten-2' }
      const brandStyle = { margin: 'auto auto', fontSize: '25px', color: 'teal', paddingTop: '3px' };
      const style_sidenav = { fontSize: '25px', color: '#000' }
      return (
         <div>
            <nav>
               <div className="nav-wrapper #212121 grey darken-4">
                  <Link to="/" style={brandStyle} className="brand-logo center-on-med">React Hub</Link>
                  <Link to="#" data-target='mobile-nav' className="sidenav-trigger">
                     <i className="material-icons">menu</i>
                  </Link>
                  <ul className="right hide-on-med-and-down" id="nav-mobile">
                     <li className="nvlinks"><Link to='/login' style={style}>Login</Link></li>
                     <li className="nvlinks"><Link to='/signup' style={style}>SignUp</Link></li>
                     <li className="nvlinks"><Link to='/myposts' style={style}>Profile</Link></li>
                     <li className="nvlinks"><Link to='/newpost' style={style}>New feed</Link></li>
                     <li className="nvlinks"><Link to='/about' style={style}>About</Link></li>
                  </ul>
               </div>
            </nav>
            <ul className="#9e9e9e grey
               sidenav" id="mobile-nav">
               <li className="nvlinks sidenav-close"><Link to='/login' style={style_sidenav}>Login</Link></li>
               <li className="nvlinks sidenav-close"><Link to='/signup' style={style_sidenav}>SignUp</Link></li>
               <li className="nvlinks sidenav-close"><Link to='/myposts' style={style_sidenav}>Profile</Link></li>
               <li className="nvlinks sidenav-close"><Link to='/newpost' style={style_sidenav}>New feed</Link></li>
               <li className="nvlinks sidenav-close"><Link to='/about' style={style_sidenav}>About</Link></li>
            </ul>
         </div>
      )
   }
}
