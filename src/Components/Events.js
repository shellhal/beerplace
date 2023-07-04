import React, { Component } from 'react';

import codyAndEvanPic from '../img/evan_and_cody.png';
import dogBp from '../img/dogBp.png';
import nightCart from '../img/night_cart.png';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCap: 2,
    }
    this.events = [
      {
        title: 'Trivia Fridays',
        when: 'July 7th, 2023, 7pm-9pm',
        upcoming: true,
        text: 'Come join us for Beerplace trivia!',
        image: dogBp,
      },
      {
        title: 'Musical Performance: The Von Boys',
        when: 'July 1st, 2023, 7pm-9pm',
        upcoming: false,
        text: 'Come join us for Beerplace trivia!',
        image: nightCart,
      },
      {
        title: 'VRG 1 Year Celebration',
        when: 'May 15th, 2023, 4pm-9pm',
        upcoming: false,
        text: 'Come eat pizza, drink beer, participate in fun games and celebrate the 1 year anniversary of our nextdoor neightbor, Valley Rock Gym, opening!',
        image: codyAndEvanPic,
      },
    ];
  }

  increaseEventCap() {
    this.setState({ eventCap: this.state.eventCap + 5});
  }

  render() {
    const events = [];
    const eventRendering = (this.events.length > this.state.eventCap) ? this.state.eventCap: this.events.length;
    const button = (this.events.length > this.state.eventCap) ? <div className="main-img-button-outer-wrapper"><button className="my-btn" onClick={this.increaseEventCap.bind(this)}>View More Events</button></div>: '';
    for (let i = 0; i < eventRendering; i += 1) {
      const event = this.events[i];
      events.push(
          <div className="event-object-wrapper">
            <div className="event-object-side">
              <div className="event-image"><img src={event.image} alt={''} className="event-image-img"/></div>
            </div>
            <div className="event-object-side">
              <h4 className="event-title">{event.title}</h4>
              <div className="event-when">{event.when}</div>
              <div className="event-text">{event.text}</div>
            </div>
          </div>
        );
    }
    return (
      <div>
      <div className="trivia-crowd-background"></div>
        <div className="events-page-wrapper">
          <div className="events-bars-wrapper">
            <div className="bar"></div>
            <h3 className="events-page-title">Events</h3>
            <div className="bar"></div>
          </div>
          <div className="events-wrapper">
          {events}
          </div>
          {button}
        </div>
        <br />
        <br />
      </div>
    );
  }
}
