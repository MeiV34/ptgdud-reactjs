import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { firstName, lastName, phone, address } = this.props;
    return (
      <div style={{ textAlign: "left" }}>
        <h2>{firstName}</h2>
        <p><strong>{lastName}</strong></p>
        <p><strong>Phone: </strong>{phone}</p>
        <p><strong>Address: </strong>{address}</p>
      </div>
    );
  }
}

export default Contact;
