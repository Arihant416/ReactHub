import React from 'react'

const Profile = () => {
   const styleDiv = { display: 'flex', justifyContent: 'space-around', margin: '24px 0px', borderRadius: '4px', borderBottom: '1px dashed #616161' };
   const styleImg = { width: "160px", height: '160px', borderRadius: '80px' }
   const styleFollowingDiv = { display: 'flex-colum', textAlign: 'center' }
   return (
      <div className="container" style={{ margin: '0px auto' }}>
         <div style={styleDiv}>
            <div>
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" style={styleImg} />
            </div>
            <div>
               <h5 style={{ textAlign: "center", marginTop: '30px' }}>Christopher Campbell</h5>
               <div style={styleFollowingDiv}>
                  <h6>100 Posts</h6>
                  <h6>54k Followers</h6>
                  <h6>200 Following</h6>
               </div>
            </div>
         </div>

         <div className="row center">
            <div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div>
            <div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div><div className="col s12 m6 l4">
               <img alt="testImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ width: '400px' }} className="responsive-img card materialBox hoverable" />
            </div>
         </div>

      </div>
   )
}

export default Profile
