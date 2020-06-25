import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
const Profile = () => {
  const [mypictures, setPictures] = useState([]);
  //eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
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
  }, []);
  const styleDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '24px 0px',
    borderRadius: '4px',
    borderBottom: '1px dashed #616161',
  };
  const styleImg = { width: '160px', height: '160px', borderRadius: '80px' };
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
            </div>
            <div>
              <h5 style={{ textAlign: 'center', marginTop: '40px' }}>
                {state ? state.firstname + ' ' + state.lastname : 'Loading..'}
              </h5>
              <h6 style={{ textAlign: 'center', marginTop: '10px' }}>
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
