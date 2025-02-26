// ContactList.js
import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            address={contact.address}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
