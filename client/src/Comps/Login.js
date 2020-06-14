import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { UserContext } from '../App'
const Login = () => {
   const { state, dispatch } = useContext(UserContext);
   const history = useHistory()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const PostCredentials = () => {
      fetch('/login', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email,
            password
         })
      }).then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.error) {
               M.toast({ html: data.error, classes: '#f44336 red' })
               console.log(data)
            } else {
               localStorage.setItem('jwt', data.token)
               localStorage.setItem('user', JSON.stringify(data.user))
               dispatch({ type: "USER", payload: data.user })
               M.toast({ html: data.message, classes: "#00e676 green accent-3 black-text bold" })
               history.push('/')
            }
         }).catch(err => console.log(err))
   }

   const style = { margin: '70px auto', maxWidth: '500px', padding: '20px', textAlign: 'center' }
   return (
      <div className="container">
         <div className="mycard #607d8b" style={style}>
            <div className="card cardy hoverable input-field">
               <h2><span>React Hub</span></h2>
               <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
               <button style={{ marginTop: '6px' }} className="btn waves-effect waves-light black darken-1" onClick={() => PostCredentials()}>Login</button>
               <h5 style={{ textAlign: "center" }}><Link style={{ color: "black" }} to="/signup">Register for new account?</Link>
               </h5>
            </div>
         </div>
      </div>

   )
}

export default Login
