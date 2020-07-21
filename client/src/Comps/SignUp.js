import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
const SignUp = () => {
  const history = useHistory();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    if (url) {
      uploadDatas();
    }
    //eslint-disable-next-line
  }, [url]);
  const UploadDP = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'react-hub');
    data.append('cloud_name', 'arihantcloudinary416');
    fetch('https://api.cloudinary.com/v1_1/arihantcloudinary416/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const uploadDatas = () => {
    if (
      //eslint-disable-next-line
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: 'invalid email', classes: '#c62828 red darken-3' });
      return;
    }
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        picture: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: '#f44336 red' });
          console.log(data);
        } else {
          M.toast({ html: data.message, classes: '#00e676 green accent-3' });
          history.push('/login');
        }
      })
      .catch((err) => console.log(err));
  };
  const PostCredentials = () => {
    if (image) {
      UploadDP();
    } else {
      uploadDatas();
    }
  };

  return (
    <div className="container">
      <div className=" mycard">
        <div className="card cardy hoverable input-field">
          <h2>
            <span>React Hub</span>
          </h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="file-field input-field">
            <div className="btn black-text browse">
              <span>Browse Pictures</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light black darken-1"
            onClick={() => PostCredentials()}
          >
            SignUp
          </button>
          <h5 style={{ textAlign: 'center' }}>
            <Link style={{ color: 'black' }} to="/login">
              Account already exists?
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
