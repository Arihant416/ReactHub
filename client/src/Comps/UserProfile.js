import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import { useParams } from 'react-router-dom';
const UserProfile = () => {
  const [userProfile, setProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    fetch(`/user/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProfile(result);
      });
    //eslint-disable-next-line
  }, []);
  const styleDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '24px 0px',
    borderRadius: '4px',
    borderBottom: '1px dashed #616161',
  };
  const styleImg = { width: '160px', height: '160px', borderRadius: '80px' };
  const styleFollowingDiv = { display: 'flex-colum', textAlign: 'center' };
  return (
    <>
      {userProfile ? (
        <div className="container" style={{ margin: '0px auto' }}>
          <div style={styleDiv}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
                style={styleImg}
              />
            </div>
            <div>
              <h5 style={{ textAlign: 'center', marginTop: '15px' }}>
                {userProfile.user.firstname + ' ' + userProfile.user.lastname}
              </h5>
              <h6 style={{ textAlign: 'center', marginTop: '10px' }}>
                {userProfile.user.email}
              </h6>
              <div style={styleFollowingDiv}>
                <h6>{userProfile.post.length} posts</h6>
                <h6>54k Followers</h6>
                <h6>200 Following</h6>
              </div>
            </div>
          </div>

          <div className="row center">
            {userProfile.post.map((picture) => {
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

export default UserProfile;
