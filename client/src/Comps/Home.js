import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
const Home = () => {
   const [data, setData] = useState([])
   const { state, dispatch } = useContext(UserContext);
   useEffect(() => {
      fetch('/alldata', {
         headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
         }
      }).then(res => res.json())
         .then(result => {
            console.log(result)
            setData(result.data)
         })
   }, [])

   const likeIt = (id) => {
      fetch('/like', {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('jwt')
         },
         body: JSON.stringify({
            postId: id
         })
      }).then(res => res.json())
         .then(result => {
            console.log(result)
            const newData = data.map(item => {
               if (item._id == result._id) {
                  return result
               } else {
                  return item
               }
            })
            setData(newData);
         }).catch(err => console.log(err))
   }
   const dislikeIt = (id) => {
      fetch('/dislike', {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('jwt')
         },
         body: JSON.stringify({
            postId: id
         })
      }).then(res => res.json())
         .then(result => {
            // console.log(result)
            const newData = data.map(item => {
               if (item._id == result._id) {
                  return result
               } else {
                  return item
               }
            })
            setData(newData);
         }).catch(err => console.log(err))
   }
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

                        {item.likes.includes(state._id) ?
                           <i className="material-icons" onClick={() => dislikeIt(item._id)}>thumb_down</i>
                           :
                           <i style={{ color: 'red' }} className="material-icons" onClick={() => likeIt(item._id)}>favorite</i>
                        }

                        <h6>{item.likes.length} liked</h6>
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