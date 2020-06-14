import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const SignUp = () => {
   const history = useHistory()
   const [firstname, setFirstName] = useState('');
   const [lastname, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const PostCredentials = () => {
      fetch('/signup', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
         })
      }).then(res => res.json())
         .then(data => {
            if (data.error) {
               M.toast({ html: data.error, classes: '#f44336 red' })
               console.log(data)
            } else {
               M.toast({ html: data.message, classes: "#00e676 green accent-3" })
               history.push('/login')
            }
         }).catch(err => console.log(err))
   }
   const style = { margin: '50px auto', maxWidth: '500px', padding: '20px', textAlign: 'center' }
   return (
      <div className="container">
         <div className=" mycard" style={style}>
            <div className="card cardy hoverable input-field">
               <h2><span>React Hub</span></h2>
               <input type="text" placeholder='First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
               <input type="text" placeholder='Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)} />
               <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
               <button className="btn waves-effect waves-light black darken-1" onClick={() => PostCredentials()}>SignUP</button>
               <h5 style={{ textAlign: "center" }}><Link style={{ color: "black" }} to="/login">Account already exists?</Link>
               </h5>
            </div>
         </div>
      </div>

   )
}

export default SignUp
