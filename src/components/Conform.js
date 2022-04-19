import React, { Component } from 'react';

export class Conform extends Component {
  
      render () {
          const {values: {name, email, phonenumber} } = this.props;
          return (
              <div>

                <h1 secondaryText={name} />
              </div>
          )
      }
}

export default Conform;