import React from 'react'

const Profile = () => {
   const styler1 = { display: 'flex', justifyContent: 'space-around', margin: '24px 0px', borderBottom: '1px solid grey' }
   const styleDp = { width: '160px', height: '160px', borderRadius: '80px' }

   return (
      <div className="container">
         <div style={styler1}>
            <div>
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="1" style={styleDp} />
            </div>
            <div>
               <h5 style={{ textAlign: 'center', marginTop: '30px' }}>Christopher Campbell</h5>
               <div className="center" style={{ display: 'flex-column', justifyContent: 'space-between', width: '108%' }}>
                  <h6>10 Posts</h6>
                  <h6>2k Following</h6>
                  <h6>100 Followers</h6>
               </div>
            </div>
         </div>

         {/* Styling the Gallery */}
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


      </div >
   )
}

export default Profile
