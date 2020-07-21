import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import { UserContext } from '../App';
import $ from 'jquery';
const Navbars = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      //eslint-disable-next-line
      var instances = M.Dropdown.init(elems, {});
    });
    $(document).ready(() => {
      M.Dropdown.init($('.dropdown-trigger'), {});
    });
  }, []);
  const renderList = () => {
    if (state) {
      return [
        <li key="0" className="lilink">
          <Link to="/mypost" style={style}>
            Profile
          </Link>
        </li>,
        <li key="1" className="lilink">
          <Link to="/friendsPost" style={style}>
            Friends
          </Link>
        </li>,

        <li key="2" className="lilink">
          <Link to="/newpost" style={style}>
            Add post
          </Link>
        </li>,

        <li key="3" className="lilink">
          <Link to="/about" style={style}>
            Dev
          </Link>
        </li>,

        <li key="4" className="lilink">
          <Link
            to="#"
            style={style}
            onClick={() => {
              localStorage.clear();
              dispatch({ type: 'CLEAR' });
              history.push('/login');
            }}
          >
            Logout
          </Link>
        </li>,
      ];
    } else {
      return [
        <li key="5" className="lilink">
          <Link to="/login" style={style}>
            Login
          </Link>
        </li>,
        <li key="6" className="lilink">
          <Link to="/signup" style={style}>
            Signup
          </Link>
        </li>,
        <li key="3" className="lilink">
          <Link to="/about" style={style}>
            Dev
          </Link>
        </li>,
      ];
    }
  };
  const style = { fontSize: '1.2rem', color: '#000' };
  return (
    <div className="navbar-fixed">
      {/* DropDown Structure */}
      <ul id="dropdown1" className="dropdown-content teal">
        {renderList()}
      </ul>
      <nav>
        <div className="nav-wrapper">
          <Link to={state ? '/' : '/login'} className="brand-logo center">
            React Hub
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="#" className="dropdown-trigger" data-target="dropdown1">
                <span
                  className="ch"
                  style={{
                    fontSize: '1rem',
                    color: 'black ',
                  }}
                >
                  <i className="material-icons">arrow_drop_down_circle</i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
