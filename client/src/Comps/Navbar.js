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
        <li key="1" className="lilink">
          <Link to="/mypost" style={style}>
            Profile
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
        className="dropdown-content #000000 black
"
      >
        {renderList()}
      </ul>
      <nav>
        <div className="nav-wrapper #000000 black">
          <Link
            to={state ? '/' : '/login'}
            className="brand-logo center"
            style={{
              marginLeft: '5px',
              fontSize: '25px',
              color: 'teal',
              paddingTop: '3px',
            }}
          >
            React Hub
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="#" className="dropdown-trigger" data-target="dropdown1">
                <span
                  className="ch"
                  style={{ fontSize: '16px', float: 'right' }}
                >
                  Check
                </span>
                <i
                  className="material-icons right"
                  style={{ color: 'white', float: 'right' }}
                >
                  arrow_drop_down
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
