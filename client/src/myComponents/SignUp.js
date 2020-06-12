import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const SignUp = () => {

   const history = useHistory();
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const AddCredentials = () => {
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
               M.toast({ html: data.message, classes: '#00e676 green accent-3' })
               history.push('/login')
            }
         }).catch(err => console.log(err))
   }

   const myFormStyle = { margin: '70px auto', maxWidth: '500px', padding: '20px', textAlign: 'center' }
   const buttonStyle = { marginTop: '6px' };
   return (
      <div className='container'>
         <div className="myform" style={myFormStyle}>
            <div className="card hoverable formcard input-field">
               <h2><span>React Hub</span></h2>
               <input type="text" placeholder='First Name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
               <input type="text" placeholder='Last Name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
               <input type="email" placeholder='Email'
                  value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button style={buttonStyle} className="btn waves-effect waves light black darken-1"
                  onClick={() => AddCredentials()}>SignUp</button>
               <h5 className='formlinks' style={{ textAlign: "center" }}>
                  <Link to="/login" style={{ color: 'black' }}>Registered already?</Link>
               </h5>
            </div>
         </div>
      </div>
   )
}

export default SignUp
