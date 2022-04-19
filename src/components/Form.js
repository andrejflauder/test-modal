import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Service from './Service';
import Conform from './Conform';
import CarBrand from './CarBrand';

export default class Form extends Component {

    state = {
        step: 1,
        name: '',
        phonenumber: '',
        email: '',
        message: ''
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
      }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }

  render() {
    const { step } = this.state;
    const { name, phonenumber, email, message } = this.state;
    const values = { name, phonenumber, email, message }

    switch (step) {
        case 1: 
          return (
            <CarBrand
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
            />
          )
        case 2: 
          return (
            <Service 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
            />
          )
        case 3: 
          return (
            <PersonalInfo 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
            />
          )
        case 4:
          return (
            <Conform             
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
            />
            )
        default: 
          
      }
  }
}
