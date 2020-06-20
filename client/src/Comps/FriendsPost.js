import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
//eslint-disable-next-line
import { history, useHistory } from 'react-router-dom';
const Home = () => {
  //eslint-disable-next-line
  const history = useHistory();
  const [data, setData] = useState([]);
  //eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch('/friendsPost', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.data);
      });
  }, []);

  const likeIt = (id) => {
    fetch('/like', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };
  const dislikeIt = (id) => {
    fetch('/dislike', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };
  const postComment = (text, postId) => {
    fetch('/comment', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };
  const deletePost = (postId) => {
    fetch(`/deletepost/${postId}`, {
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };
  const deleteComment = (postId, commentId) => {
    fetch(`/deletecomment/${postId}/${commentId}`, {
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home container">
      {data.map((item) => {
        return (
          <div className="card hoverable home-card" key={item._id}>
            <h5 className="center">
              <Link
                style={{ color: 'black' }}
                to={
                  item.uploadedBy._id !== state._id
                    ? `/profile/${item.uploadedBy._id}`
                    : `/mypost`
                }
              >
                {item.uploadedBy.firstname + ' ' + item.uploadedBy.lastname}
              </Link>
              {item.uploadedBy._id === state._id && (
                <i
                  className="material-icons"
                  style={{ float: 'right', paddingTop: '3px' }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )}
            </h5>
            <div className="card-image">
              <img src={item.picture} alt="" />
            </div>
            <div className="card-content">
              {item.likes.includes(state._id) ? (
                <h6>
                  <i
                    className="material-icons"
                    style={{
                      color: 'black',
                      fontSize: '15px',
                      marginTop: '4px',
                      paddingRight: '4px',
                      cursor: 'pointer',
                      float: 'left',
                    }}
                    onClick={() => dislikeIt(item._id)}
                  >
                    thumb_down
                  </i>{' '}
                  {'     '}Click to dislike
                </h6>
              ) : (
                <h6>
                  <i
                    style={{
                      color: 'red',
                      fontSize: '15px',
                      marginTop: '4px',
                      paddingRight: '4px',
                      cursor: 'pointer',
                      float: 'left',
                    }}
                    className="material-icons"
                    onClick={() => likeIt(item._id)}
                  >
                    thumb_up
                  </i>{' '}
                  Click to like
                </h6>
              )}
              <h6>{item.likes.length} liked</h6>
              <h6>{item.title}</h6>
              <p>{item.content}</p>
              {item.comments.map((comment) => {
                return (
                  <h6 key={comment._id}>
                    {comment.postedBy._id === state._id && (
                      <i
                        className="material-icons"
                        style={{
                          cursor: 'pointer',
                          float: 'left',
                          fontSize: '15px',
                          marginTop: '4px',
                          paddingRight: '4px',
                        }}
                        onClick={() => deleteComment(item._id, comment._id)}
                      >
                        delete
                      </i>
                    )}
                    <span style={{ fontWeight: 'bold' }}>
                      {comment.postedBy.firstname}
                    </span>{' '}
                    -{comment.text}
                  </h6>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  postComment(e.target[0].value, item._id);
                  e.target[0].value = '';
                }}
              >
                <input type="text" placeholder="Say Something!" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
