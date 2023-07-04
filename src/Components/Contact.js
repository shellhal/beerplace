import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      messageBody: '',
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }

  render() {
    const button = this.state.allFilled ? <button className="submit my-btn">Submit</button> : <button disabled className="submit my-btn">Submit</button>;
    return (
      <div className="contact-wrapper">
        <h3>Contact BeerPlace!</h3>
        <div className="static-contact-info">Email: xxx@gmail.com</div>
        <div className="static-contact-info">Phone: (xxx)-xxx-xxxx</div>
        <br/>
        <Form>
          <div className="first-last-name-form-wrapper">
            <FormGroup className="name-field">
              <Label for="firstName">First Name</Label>
              <Input className="my-input" type="first" name="first" id="firstName" placeholder="First" />
            </FormGroup>
            <FormGroup className="name-field">
              <Label for="lastName">Last Name</Label>
              <Input className="my-input" type="last" name="last" id="lastName" placeholder="Last" />
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="exampleEmail">Your Email</Label>
            <Input className="my-input" type="email" name="email" id="exampleEmail" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input className="my-input large-input" onChange={this.handleMessageChange.bind(this)} type="textarea" name="text" id="exampleText" />
          </FormGroup>
          { button }
        </Form>
      </div>
    );
  }
}
