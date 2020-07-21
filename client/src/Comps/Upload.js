import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
const Upload = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (url) {
      fetch('/newpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify({
          title,
          content,
          picture: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: '#f44336 red' });
          } else {
            M.toast({
              html: 'Post Successful',
              classes: '#00e676 green accent-3',
            });
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //eslint-disable-next-line
  }, [url]);

  const uploadDetails = () => {
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

  return (
    <div className="container">
      <div className="card hoverable input-field cardy">
        <h2>React Hub</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn black-text browse">
            <span>Browse</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light black"
          onClick={() => uploadDetails()}
        >
          Post feed
        </button>
      </div>
    </div>
  );
};

export default Upload;
