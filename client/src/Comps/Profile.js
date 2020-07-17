import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import M from 'materialize-css';
const Profile = () => {
  const [mypictures, setPictures] = useState([]);
  //eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  // const [url, setUrl] = useState(undefined);
  const [image, setImage] = useState('');
  useEffect(() => {
    fetch('mypost', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((results) => {
        setPictures(results.data);
      });
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'react-hub');
      data.append('cloud_name', 'arihantcloudinary416');
      fetch(
        'https://api.cloudinary.com/v1_1/arihantcloudinary416/image/upload',
        {
          method: 'post',
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // setUrl(data.url);

          M.toast({
            html: 'It takes at least 5 seconds',
            classes: 'orange',
          });
          fetch('/updateDP', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
              picture: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                'user',
                JSON.stringify({ ...state, picture: result.picture })
              );
              dispatch({ type: 'UPDATEPIC', payload: result.picture });
            });
        })
        .catch((err) => console.log(err));
    }
    //eslint-disable-next-line
  }, [image]);
  const updateDP = (dp) => {
    setImage(dp);
  };
  const styleDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '24px 0px',
    borderRadius: '4px',
    borderBottom: '1px dashed #616161',
  };
  const styleImg = {
    width: '160px',
    height: '160px',
    borderRadius: '20px',
    margin: 'auto',
  };
  const styleFollowingDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '108%',
  };
  return (
    <>
      {state ? (
        <div className="container" style={{ margin: '0px auto' }}>
          <div style={styleDiv}>
            <div>
              <img
                src={state ? state.picture : 'loading'}
                alt=""
                style={styleImg}
              />
              <div className="file-field input-field">
                <div className="btn black-text #e0e0e0 grey lighten-2">
                  <span>Edit Avatar</span>
                  <input
                    type="file"
                    onChange={(e) => updateDP(e.target.files[0])}
                  />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div>
              <h5
                style={{
                  textAlign: 'center',
                  marginTop: '40px',
                  paddingLeft: '10px',
                }}
              >
                {state ? state.firstname + ' ' + state.lastname : 'Loading..'}
              </h5>
              <h6
                style={{
                  textAlign: 'center',
                  margin: 'auto 10px',
                  paddingLeft: '15px',
                }}
              >
                {state.email}
              </h6>
              <div style={styleFollowingDiv}>
                <h6>{mypictures.length}</h6>
                <h6>{state ? state.followers.length : 'Fetching'} Followers</h6>
                <h6>
                  {state ? state.following.length : 'Fetching'} Following{' '}
                </h6>
              </div>
            </div>
          </div>

          <div className="row center">
            {mypictures.map((picture) => {
              return (
                <div className="col s12 m6 l4">
                  <img
                    key={picture._id}
                    alt={picture.title}
                    src={picture.picture}
                    style={{ width: '400px' }}
                    className="responsive-img card materialBox hoverable"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container center">
          <h2>Loading...!</h2>
        </div>
      )}
    </>
  );
};

export default Profile;
