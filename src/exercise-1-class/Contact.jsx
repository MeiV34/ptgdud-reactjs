// Contact.js
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { firstName, lastName, phone, address } = this.props;  // Nhận props từ App
    return (
      <div style={{textAlign:"left"}}>
        <h2 style={{padding:0, margin:0}}>{firstName}</h2>
        <p><strong>{lastName}</strong></p>
        {/* <hr> */}
        <p><strong>Phone: </strong>{phone}</p>
        <p><strong>Address: </strong>{address}</p>
      </div>
    );
  }
}

export default Contact;
