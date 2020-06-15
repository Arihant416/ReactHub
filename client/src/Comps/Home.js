import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
const Home = () => {
   const [data, setData] = useState([])
   useEffect(() => {
      fetch('/alldata', {
         headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
         }
      }).then(res => res.json())
         .then(result => {
            setData(result.data)
         })
   }, [])
   return (
      <div className="home container">
         {
            data.map(item => {
               return (
                  <div className="card hoverable home-card" key={item._id}>
                     <h5 className="center">{item.uploadedBy.firstname + " " + item.uploadedBy.lastname}</h5>
                     <div className="card-image">
                        <img src={item.picture} alt="" />
                     </div>
                     <div className="card-content">
                        <i className="material-icons">favorite</i>
                        <h6>{item.title}</h6>
                        <p>{item.content}</p>
                        <input type="text" placeholder="Say Somethinng!" />
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default Home