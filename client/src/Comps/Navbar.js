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
            Circle's Feed
          </Link>
        </li>,

        <li key="2" className="lilink">
          <Link to="/newpost" style={style}>
            New feed
          </Link>
        </li>,

        <li key="3" className="lilink">
          <Link to="/about" style={style}>
            Developer
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

        <li key="3" className="lilink">
          <Link to="/about" style={style}>
            Developer
          </Link>
        </li>,

        <li key="6" className="lilink">
          <Link to="/signup" style={style}>
            Signup
          </Link>
        </li>,
      ];
    }
  };
  const style = { fontSize: '18px', color: '#fff' };
  return (
    <div>
      {/* DropDown Structure */}
      <ul
        id="dropdown1"
        className="dropdown-content #01579b light-blue darken-4
"
      >
        {renderList()}
      </ul>
      <nav>
        <div className="nav-wrapper">
          <Link to={state ? '/' : '/login'} className="brand-logo left">
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
                    float: 'left',
                  }}
                >
                  Drop
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
