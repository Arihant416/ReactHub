import React, { Component } from 'react'
import M from 'materialize-css'
import $ from 'jquery';
export default class About extends Component {
   componentWillMount() {
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
            <h2 className="center">You can find me here ⬇</h2>
            <div class="carousel">
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.linkedin.com/in/arihant-jain-01a417144/" target="_blank"><img src="https://qph.fs.quoracdn.net/main-qimg-05f1ceb11a77b68fd6bf72da21b3400c" alt="LinkedInLogo" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://github.com/Arihant416" target="_blank"><img src="https://i2.wp.com/supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1" alt="Github" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.codechef.com/users/arihantchef" target="_blank"><img src="https://yourchennai.com/wp-content/uploads/2016/05/CodeChef-Logo-715x400.png" alt="Codechef" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://twitter.com/Arihant2302" target="_blank"><img src="https://www.logolynx.com/images/logolynx/1d/1d606f93d92a2fb5a0f8e3010139dc66.png" alt="Twitter" /></a>
               <a rel="noopener noreferrer" className="carousel-item" href="https://www.instagram.com/_arihantjn/" target="_blank"><img src="https://image.shutterstock.com/image-photo/bangkok-thailand-may-14-2016-260nw-419396578.jpg" alt="Instagram" /></a>
            </div>
         </div>
      )
   }
}
