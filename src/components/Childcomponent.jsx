// import React from "react";

// // class Childcomponent extends React.Component {
// //   state = {
// //     Name: "",
// //     Age: 0,
// //     Address: "",
// //   };
// //   handleOnSubmit = (event) => {
// //     event.preventDefault();
// //     const { Name, Age, Address } = this.state;

// //     if (!Name || Age <= 0 || !Address) {
// //       alert("Thông tin không hợp lệ");
// //       return;
// //     }

// //     this.props.handleAddNewUser({
// //       id: Math.random(),
// //       Name,
// //       Age,
// //       Address,
// //     });

// //     // Reset form sau khi submit thành công
// //     this.setState({
// //       Name: "",
// //       Age: 0,
// //       Address: "",
// //     });
// //   };
// //   handleInput = (event) => {
// //     this.setState({
// //       valueInput: event.target.value,
// //     });
// //   };
// //   handleOnchangeName(event) {
// //     this.setState({
// //       Name: event.target.value,
// //     });
// //   }
// //   handleOnchangeAge(event) {
// //     this.setState({
// //       Age: event.target.value,
// //     });
// //   }
// //   handleOnchangeAddress(event) {
// //     this.setState({
// //       Address: event.target.value,
// //     });
// //   }
// //   render() {
// //     return (
// //       <>
// //         My name is {this.state.Name}, i am {this.state.Age} year old, i live in{" "}
// //         {this.state.Address}
// //         <form onSubmit={this.handleOnSubmit}>
// //           <label>Your name is:</label>
// //           <input
// //             value={this.state.Name}
// //             type="text"
// //             onChange={(event) => this.handleOnchangeName(event)}
// //           />{" "}
// //           <br />
// //           <label>Your age is:</label>
// //           <input
// //             value={this.state.Age}
// //             type="text"
// //             onChange={(event) => this.handleOnchangeAge(event)}
// //           />
// //           <br />
// //           <label>Your address is:</label>
// //           <input
// //             value={this.state.Address}
// //             type="text"
// //             onChange={(event) => this.handleOnchangeAddress(event)}
// //           />
// //           <button style={{ marginLeft: "10px" }} type="submit">
// //             Submit
// //           </button>
// //         </form>
// //       </>
// //     );
// //   }
// // }

// const Childcomponent = (props) => {
//   // state = {
//   //     Name: 'Hien',
//   //     Age: 28,
//   //     Address: 'HCM'
//   // }
//   //chuyển sang hook
//   const [Name, setName] = useState("");
//   const [Age, setAge] = useState("");
//   const [Address, setAddress] = useState("IUH");

//   const handleOnchangeName = (event) => {
//     setName(event.target.value);
//   };

//   const handleOnchangeAge = (event) => {
//     setAge(event.target.value);
//   };

//   const handleOnchangeAddress = (event) => {
//     setAddress(event.target.value);
//   }; 

//   const handleOnSubmit = (event) => {
//     event.preventDefault(); //ngăn việc tải lại trang
//     props.handleAddnewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "user",
//       Name: Name,
//       Age: Age,
//       Address: Address,
//     });
//   };

//   return (
//     <>
//       My name is {this.state.Name}, i am {this.state.Age} year old, i live in{" "}
//       {this.state.Address}
//       <form action="" onSubmit={(event) => handleOnSubmit(event)}>
//         <label>Your name is:</label>
//         <input
//           value={this.state.Name}
//           type="text"
//           onChange={(event) => handleOnchangeName(event)}
//         />{" "}
//         <br />
//         <label>Your age is:</label>
//         <input
//           value={this.state.Age}
//           type="text"
//           onChange={(event) => handleOnchangeAge(event)}
//         />
//         <br />
//         <label>Your address is:</label>
//         <input
//           value={this.state.Address}
//           type="text"
//           onChange={(event) => handleOnchangeAddress(event)}
//         />
//         <button style={{ marginLeft: "10px" }} type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default Childcomponent;

import React from "react";

class Childcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "abc", //giá trị mặc định
    };
  }

  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: this.state.Name,
      Age: this.state.Age,
    });
  };
  render() {
    return (
      <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={this.state.Name}
          onChange={(event) => this.handleOnchangeInput(event)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Childcomponent;
