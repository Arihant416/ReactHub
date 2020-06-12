import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const Login = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const AddCredentials = () => {
      fetch('/login', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email,
            password
         })
      }).then(res => res.json())
         .then(data => {
            // console.log(data);
            if (data.error) {
               M.toast({ html: data.error, classes: '#f44336 red' })
            } else {
               localStorage.setItem('jwt', data.token);
               localStorage.setItem('user', JSON.stringify(data.user));
               M.toast({ html: data.message, classes: '#00e676 green accent-3 black-text' })
               history.push('/');
            }
         }).catch(err => console.log(err))
   }

   const myFormStyle = { margin: '70px auto', maxWidth: '500px', padding: '20px', textAlign: 'center' }
   const buttonStyle = { marginTop: '6px' };
   return (
      <div className="container">
         <div className="myform" style={myFormStyle}>
            <div className="#607d8b card formcard hoverable input-field">
               <h2><span>React Hub</span></h2>
               <input type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
               <button style={buttonStyle} className="btn waves-effect waves light black darken-1"
                  onClick={() => AddCredentials()}>Login</button>
               <h5 style={{ textAlign: "center" }}>
                  <Link to="/signup">Register Now</Link>
               </h5>
            </div>
         </div>
      </div>
   )
}

export default Login
