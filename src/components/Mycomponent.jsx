import React from "react";
import Childcomponent from './Childcomponent';
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { Name: "Vy", Age: 20, Address: "Đồng Tháp" },
            { Name: "Vy 2", Age: 21, Address: "Hà Nội" },
            { Name: "Vy 3", Age: 22, Address: "TP.HCM" },
        ]
    }
    handleAddNewUser = (userObject) => {
        // Them 1 user vao state
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]

        })
    }
    render() {
        return (
            <div>
                <Childcomponent handleAddNewUser={this.handleAddNewUser}></Childcomponent>
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    removeUser={this.removeUser}

                />
            </div>

        );
    }
}
export default Mycomponent;