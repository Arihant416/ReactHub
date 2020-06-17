import React, { Component } from 'react'
import M from 'materialize-css'
import $ from 'jquery';
export default class About extends Component {
   componentDidMount() {
      document.addEventListener('DOMContentLoaded', function () {
         var elems = document.querySelectorAll('.carousel');
         //eslint-disable-next-line
         var instances = M.Carousel.init(elems, {});
      });
      $(document).ready(() => {
         M.Carousel.init($('.carousel'), {})
      })
   }
   render() {
      return (
         <div className="container">
            <div className="center">
               {/* eslint-disable-next-line */}
               <h5 className="abouth5">Welcome to React Hub version 1.0.1, developed by <span className="myName">Arihant Jain <span role='img'>😀</span></span>.<br />
               Hub currently supports all the crud operations with certain additional features.
               <br /><br />
               Good to have you here , Hub hopes you enjoy its service.<i className="material-icons" style={{ color: 'red' }}>favorite</i><br />

               </h5>
            </div>
            <h2 className="center">Click to check my Profile⬇</h2>
            <div className="carousel">
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.linkedin.com/in/arihant-jain-01a417144/" target="_blank"><img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" alt="LinkedInLogo" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://github.com/Arihant416" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.codechef.com/users/arihantchef" target="_blank"><img src="https://s3.amazonaws.com/codechef_shared/misc/fb-image-icon.png" alt="Codechef" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://twitter.com/Arihant2302" target="_blank"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Twitter" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.instagram.com/_arihantjn/" target="_blank"><img src="http://res.cloudinary.com/arihantcloudinary416/image/upload/v1591975843/nwtaqvazdtmxvya6opbd.png" alt="Instagram" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.hackerrank.com/arihantjain416" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.hackerearth.com/@arihant57" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png" alt="HackerEarth" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.facebook.com/arihant.jain.9400984/" target="_blank"><img src="http://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png" alt="Facebook" /></a>
            </div>
         </div>
      )
   }
}
