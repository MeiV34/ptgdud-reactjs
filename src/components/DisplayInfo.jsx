// import React from "react";

// const DisplayInfo = ({ listUsers }) => {
//   return (
//     <div className="display-info-user">
//       {listUsers?.length > 0 ? (
//         listUsers.map((user) => (
//           <React.Fragment key={user.id || Math.random()}>
//             <div className={user.Age > 18 ? "blue" : "red"}>
//               <div>My name is: {user.Name}</div>
//               <div>My age is: {user.Age}</div>
//               <div>My address is: {user.Address}</div>
//             </div>
//             <hr />
//           </React.Fragment>
//         ))
//       ) : (
//         <p>No user data available</p>
//       )}
//     </div>
//   );
// };

// const DisplayInfor = (props) => {
//   const { listUser } = props; //trong function component không dùng this
//   const [isShowHideListUser, setShowHideListUser] = useState(true);
//   // this.state{
//   //     isShowHideListUser:true//gán giá trị cho biến
//   // }
//   const handleShowHideListUser = () => {
//     setShowHideListUser(!isShowHideListUser);
//   };
//   return (
//     <div className="display-info-user">
//       {listUser?.length > 0 ? (
//         listUser.map((user) => (
//           <React.Fragment key={user.id || Math.random()}>
//             <div className={user.Age > 18 ? "blue" : "red"}>
//               <div>My name is: {user.Name}</div>
//               <div>My age is: {user.Age}</div>
//               <div>My address is: {user.Address}</div>
//             </div>
//             <hr />
//           </React.Fragment>
//         ))
//       ) : (
//         <p>No user data available</p>
//       )}
//     </div>
//   ); //phần này tương tự class component
// };

// export default DisplayInfo;

import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
  const { listUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = (pops) => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    setTimeout(() => {
      document.title = "Hello React hook";
    }, 3000);
    console.log("call useeffect");
  }, []);

  useEffect(() => {
    if (listUser.length === 0) alert("You deleted all users");
    console.log("call useeffect");
  }, [listUser]);

  return (
    <div>
      <button onClick={handleShowHideListUser}>
        {isShowHideListUser ? "HideListUser" : "showListUser"}
      </button>
      {isShowHideListUser &&
        listUser.map((user) => {
          return (
            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
              <div>User name is: {user.Name}</div>
              <div>User Age: {user.Age}</div>
              <button
                onClick={() => {
                  props.handleDeleteUser(user.id);
                }}
              >
                Delete
              </button>

              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayInfor;
