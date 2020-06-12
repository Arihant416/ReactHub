import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';

const NewPost = () => {
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
               'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
               title,
               content,
               picture: url
            })
         }).then(res => res.json())
            .then(data => {
               if (data.error) {
                  M.toast({ html: data.error, classes: '#f44336 red' })
                  history.push('/login')
               } else {
                  M.toast({ html: 'Feed Posted Successfully', classes: '#00e676 green accent-3' })
                  history.push('/')
               }
            }).catch(err => {
               console.log(err);
            })
      }
      //eslint-disable-next-line
   }, [url])
   const postFeed = () => {
      const feed = new FormData();
      feed.append('file', image);
      feed.append('upload_preset', 'react-hub')
      feed.append('cloud_name', 'arihantcloudinary416')
      fetch('https://api.cloudinary.com/v1_1/arihantcloudinary416/image/upload', {
         method: 'post',
         body: feed
      }).then(res => res.json())
         .then(feed => {
            setUrl(feed.url)
         })
         .catch(err => console.log(err));
   }
   const style = {
      margin: '80px auto',
      maxWidth: '500px',
      padding: '20px',
      textAlign: 'center'
   }
   return (
      <div className="container">
         <div style={style} className="card hoverable input-field">
            <h2>React Hub</h2>
            <input type="text" placeholder="Feed's Header" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Say Something about this feed.."
               value={content} onChange={(e) => setContent(e.target.value)} />
            <div className="file-field input-field">
               <div className="btn black-text grey lighten-2" id="e0e0e0">
                  <span>Browse Picture</span>
                  <input type="file" onChange={(e) => setImage(e.target.files[0])} />
               </div>
               <div className="file-path-wrapper">
                  <input type="text" className="file-path validate" />
               </div>
            </div>
            <button className="btn waves-effect waves-light cyan" id="00bcd4" onClick={() => postFeed()}>Post Feed</button>
         </div>
      </div>
   )
}

export default NewPost