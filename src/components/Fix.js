import React, { Component } from 'react';
import { render } from 'react-dom';
import Rows from './Rows';

class Fix extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }
  calculateTotal(input, checked) {
    let { total } = this.state;

    if (checked) {
      total += input;
    } else {
      total -= input;
    }

    this.setState({
      total
    });
  }
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <Rows calculateTotal={this.calculateTotal} value={10} onChange={this.handleChange('oil')} />Change oil
        <Rows calculateTotal={this.calculateTotal} value={20} onChange={this.handleChange('tyre')} />Change tyre
        <Rows calculateTotal={this.calculateTotal} value={30} onChange={this.handleChange('coil')} />Change warp coil

        <p>Total: {this.state.total}</p>
      </div>
    );
  }
}

  export default Fix;