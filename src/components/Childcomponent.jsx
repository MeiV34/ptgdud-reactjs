import React from "react";

class Childcomponent extends React.Component {
    state = {
        Name: "",
        Age: 0,
        Address: ""
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        const { Name, Age, Address } = this.state;

        if (!Name || Age <= 0 || !Address) {
            alert("Thông tin không hợp lệ");
            return;
        }

        this.props.handleAddNewUser({
            id: Math.random(),
            Name,
            Age,
            Address,
        });

        // Reset form sau khi submit thành công
        this.setState({
            Name: "",
            Age: 0,
            Address: "",
        });
    };
    handleInput = (event) => {
        this.setState({
            valueInput: event.target.value
        })
    }
    handleOnchangeName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    handleOnchangeAge(event) {
        this.setState({
            Age: event.target.value
        })
    }
    handleOnchangeAddress(event) {
        this.setState({
            Address: event.target.value
        })
    }
    render() {
        return (
            <>
                My name is {this.state.Name}, i am {this.state.Age} year old, i live in {this.state.Address}
               
                <form onSubmit={this.handleOnSubmit}>
                    <label>Your name is:</label>
                    <input
                        value={this.state.Name}
                        type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    /> <br />
                    <label>Your age is:</label>
                    <input
                        value={this.state.Age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    /><br />
                    <label>Your address is:</label>
                    <input
                        value={this.state.Address}
                        type="text"
                        onChange={(event) => this.handleOnchangeAddress(event)}
                    />
                    <button style={{ marginLeft: "10px"}} type="submit">Submit</button>
                </form>
            </>
        );
    }

}

export default Childcomponent;