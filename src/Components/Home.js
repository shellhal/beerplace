import React, { Component } from 'react';

import Footer from './Footer';

import codyAndEvanPic from '../img/evan_and_cody.png';
import beccaBeerPic from '../img/becca_beer.png';
import evanFallPic from '../img/evan_fall.png';
import nightCartPic from '../img/night_cart.png';
import dogBp from '../img/dogBp.png';

import instagram from '../img/insta-icon.png';
import facebook from '../img/facebook-icon.png';

export default class Home extends Component {
  render() {
    const instagrams = [];
    for (let i = 0; i < 8; i += 1) {
      instagrams.push(<div className="insta-post"></div>);
    }
    return (
      <div className="home-page">
        <div className="section-wrapper section-one hours-and-info">
          <div className="beerplace-main-info hidden">
            <div className="main-info-title">BeerPlace</div>
            <div className="main-info-text">
              
            </div>
          </div>
        </div>
        <div className="section-wrapper section-two">
          <div>
          </div>
          <div className="about-hours-wrapper">
            <div className="about-wrapper">
              <div className="about-title-wrapper"><h2>BeerPlace</h2></div>
              <div className="about-title-location"><h6>Corvallis, Oregon</h6></div>
              <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la
              bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="hours-wrapper">
                <div className="hours-title">Hours</div>
                <div className="hours-body"><div>Wed</div><div>4-10</div></div>
                <div className="hours-body"><div>Thurs</div><div>4-10</div></div>
                <div className="hours-body"><div>Fri</div><div>4-10</div></div>
                <div className="hours-body"><div>Sat</div><div>4-10</div></div>
                <div className="hours-body"><div>Sun</div><div>10-2</div></div>
              </div>
          </div>
        </div>

        <div className="section-wrapper section-three">
            <div className="img-button-combo">
              <img src={dogBp} alt={''} className="dog-bp square-main-pic"/>
              <div className="img-button-combo-text">Check out our musical events, trivia nights, and community celebrations!</div>
              <div className="main-img-button-outer-wrapper">
                <button onClick={() => window.location='/events'} className="my-btn img-btn-combo-btn">Events Page</button>
              </div>

            </div>
            <div className="img-button-combo">
              <img src={beccaBeerPic} alt={''} className="becca-beer-pic square-main-pic"/>
              <div className="img-button-combo-text">Questions, comments, or want to get in contact with our staff?</div>
              <div className="main-img-button-outer-wrapper">
                <button onClick={() => window.location='/contact'} className="my-btn img-btn-combo-btn">Contact Us</button>
              </div>
            </div>
        </div>

        <div className="section-wrapper section-four">
          <div className="socials-bar">
            <div className="bar"></div>
            <div className="social-icons">
              <div><a href="https://www.instagram.com/beerplace_corvallis/" target="_blank"><img src={instagram} alt={''} className="instagram icon-lg"/></a></div>
              <div><a href="https://www.facebook.com/corvallisbeerplace/" target="_blank"><img src={facebook} alt={''} className="facebook icon-xlg"/></a></div>
            </div>
            <div className="bar"></div>
          </div>

          <div className="instas-wrapper">
            {instagrams}
          </div>
          <br/>
        </div>

        <Footer />
        
      </div>
    );
  }
}
