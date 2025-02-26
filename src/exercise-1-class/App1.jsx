// App.js
import React, { Component } from 'react';
import Contact from './Contact';

class App extends Component {
  render() {
    const chidi = {
      firstName: "Chidi",
      lastName: "Anagonye",
      phone: "555-366-8987",
      address: "St. John's University, Sydney, Australia"
    };

    return (
      <div>
        {}
        <Contact 
          firstName={chidi.firstName} 
          lastName={chidi.lastName} 
          phone={chidi.phone} 
          address={chidi.address} 
        />
      </div>
    );
  }
}


export default App;
