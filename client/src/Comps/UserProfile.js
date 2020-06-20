import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import { useParams } from 'react-router-dom';
const UserProfile = () => {
  const [userProfile, setProfile] = useState(null);
  const [showFollow, setShowFollow] = useState(true);
  //eslint-disable-next-line
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
        // console.log(result);
        setProfile(result);
      });
    //eslint-disable-next-line
  }, []);

  const AddFriend = () => {
    fetch('/follow', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        followId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'UPDATE',
          payload: { following: data.followers, followers: data.followers },
        });
        localStorage.setItem('user', JSON.stringify(data));
        setProfile((lastState) => {
          return {
            ...lastState,
            user: {
              ...lastState.user,
              followers: [...lastState.user.followers, data._id],
            },
          };
        });
        setShowFollow(false);
      });
  };
  const UnFriend = () => {
    fetch('/unfollow', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        unfollowId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'UPDATE',
          payload: { following: data.followers, followers: data.followers },
        });
        localStorage.setItem('user', JSON.stringify(data));
        setProfile((lastState) => {
          const newFollower = lastState.user.followers.filter(
            (item) => item !== data._id
          );
          return {
            ...lastState,
            user: {
              ...lastState.user,
              followers: newFollower,
            },
          };
        });
        setShowFollow(true);
      });
  };
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
              <h5 style={{ textAlign: 'center', marginTop: '40px' }}>
                {userProfile.user.firstname + ' ' + userProfile.user.lastname}
                {showFollow ? (
                  <i
                    className="material-icons"
                    style={{
                      marginLeft: '10px',
                      marginTop: '6px',
                      cursor: 'pointer',
                    }}
                    onClick={() => AddFriend()}
                  >
                    person_add
                  </i>
                ) : (
                  <i
                    className="material-icons"
                    style={{
                      marginLeft: '10px',
                      marginTop: '6px',
                      cursor: 'pointer',
                    }}
                    onClick={() => UnFriend()}
                  >
                    remove_circle
                  </i>
                )}
              </h5>
              <h6 style={{ textAlign: 'center', marginTop: '10px' }}>
                {userProfile.user.email}
              </h6>
              <div style={styleFollowingDiv}>
                <h6>{userProfile.post.length} posts</h6>
                <h6>{userProfile.user.followers.length} followers</h6>
                <h6>{userProfile.user.following.length} following</h6>
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
