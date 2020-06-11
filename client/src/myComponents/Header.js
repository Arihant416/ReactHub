import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export default class Header extends Component {
   componentDidMount() {
      const M = window.M;
      document.addEventListener('DOMContentLoaded', function () {
         var elems = document.querySelectorAll('.sidenav');
         var instances = M.Sidenav.init(elems, {});
      })
   }
   render() {
      const style = { fontSize: '18px', color: '#eeeeee grey lighten-2' }
      const brandStyle = { margin: 'auto auto', fontSize: '25px', color: 'teal', paddingTop: '3px' };
      const style_sidenav = { fontSize: '25px', color: '#fff' }
      return (
         <div>
            <nav>
               <div className="nav-wrapper #212121 grey darken-4">
                  <Link to="/" style={brandStyle} className="brand-logo center">React Hub</Link>
                  <a href="#" data-target='mobile-nav' className="sidenav-trigger">
                     <i className="material-icons">menu</i>
                  </a>
                  <ul className="right hide-on-med-and-down" id="nav-mobile">
                     <li className="nvlinks"><Link to='login' style={style}>Login</Link></li>
                     <li className="nvlinks"><Link to='login' style={style}>SignUp</Link></li>
                     <li className="nvlinks"><Link to='login' style={style}>Profile</Link></li>
                     <li className="nvlinks"><Link to='login' style={style}>New feed</Link></li>
                  </ul>
               </div>
            </nav>
            <ul className="#212121 grey darken-4 sidenav" id="mobile-nav">
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
