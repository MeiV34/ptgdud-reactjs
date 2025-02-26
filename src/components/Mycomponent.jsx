// import React from "react";
// import Childcomponent from './Childcomponent';
// import DisplayInfo from "./DisplayInfo";
// import AddUserInfor from "./AddUserInfor";
// // class Mycomponent extends React.Component {
// //     state = {
// //         listUsers: [
// //             { Name: "Vy", Age: 20, Address: "Đồng Tháp" },
// //             { Name: "Vy 2", Age: 21, Address: "Hà Nội" },
// //             { Name: "Vy 3", Age: 22, Address: "TP.HCM" },
// //         ]
// //     }
// //     handleAddNewUser = (userObject) => {
// //         // Them 1 user vao state
// //         this.setState({
// //             listUsers: [userObject, ...this.state.listUsers]

// //         })
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 <Childcomponent handleAddNewUser={handleAddNewUser}></Childcomponent>
// //                 <DisplayInfo
// //                     listUsers={listUsers}
// //                     removeUser={removeUser}

// //                 />
// //             </div>

// //         );
// //     }
// // }

// const Mycomponent = () => {
//     const [listUser, setlistUser] = useState([
//     { id: 1, Name: "Dung", Age: 49 },
//     { id: 2, Name: "Hoang", Age: 17 },
//     { id: 3, Name: "Chien", Age: 32 },
//   ]);

//   const handleAddnewUser = (userObject) => {
//     setlistUser([userObject, ...listUser]);
//   };

//   const handleDeleteUser = (userID) => {
//     let listUserClone = listUser;
//     listUserClone = listUserClone.filter((item) => item.id !== userID);
//     setlistUser(listUserClone);
//   };

//   return (
//     <div>
//       <div>
//         <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>

//         <hr />
//         <DisplayInfo
//           listUser={listUser}
//           handleDeleteUser={handleDeleteUser}
//         ></DisplayInfo>
//       </div>
//     </div>
//   );
// };

// // const handleAddnewUser = (userObject) => {
// //     setlistUser([userObject, ...listUser]);
// //   };

// //   const handleDeleteUser = (userID) => {
// //     let listUserClone = listUser;
// //     listUserClone = listUserClone.filter((item) => item.id !== userID);
// //     setlistUser(listUserClone);
// //   };

// // return (
// //     <div>
// //       <div>
// //         <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>

// //         <hr />
// //         <DisplayInfor
// //           listUser={listUser}
// //           handleDeleteUser={handleDeleteUser}
// //         ></DisplayInfor>
// //       </div>
// //     </div>
// //   );

// export default Mycomponent;

import React, { useState } from "react";
import Childcomponent from "./Childcomponent";
import DisplayInfo from "./DisplayInfo";
import AddUserInfor from "./AddUserInfor";
const Mycomponent = () => {
  const [listUser, setlistUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 17 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setlistUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setlistUser(listUserClone);
  };

  return (
    <div>
      <div>
        <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>

        <hr />
        <DisplayInfo
          listUser={listUser}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfo>
      </div>
    </div>
  );
};

export default Mycomponent;
