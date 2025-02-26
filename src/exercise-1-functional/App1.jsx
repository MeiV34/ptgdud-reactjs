// App.js
import React, { Component } from 'react';
import Contact from './Contact';

// class App extends Component {
//   render() {
//     const chidi = {
//       firstName: "Chidi",
//       lastName: "Anagonye",
//       phone: "555-366-8987",
//       address: "St. John's University, Sydney, Australia"
//     };

//     return (
//       <div>
//         {/* Truyền dữ liệu contact cho component Contact */}
//         <Contact 
//           firstName={chidi.firstName} 
//           lastName={chidi.lastName} 
//           phone={chidi.phone} 
//           address={chidi.address} 
//         />
//       </div>
//     );
//   }
// }

function App() {
  const contact = {
    firstName: "Văn A",
    lastName: "Nguyễn",
    phone: "0901234567",
    address: "Hà Nội",
  };

  return (
    <div>
      <Contact 
        firstName={contact.firstName}
        lastName={contact.lastName}
        phone={contact.phone}
        address={contact.address}
      />
    </div>
  );
}

export default App;
