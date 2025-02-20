import React from "react";

const DisplayInfo = ({ listUsers }) => {
    return (
        <div className="display-info-user">
            {listUsers?.length > 0 ? (
                listUsers.map((user) => (
                    <React.Fragment key={user.id || Math.random()}>
                        <div className={user.Age > 18 ? "blue" : "red"}>
                            <div>My name is: {user.Name}</div>
                            <div>My age is: {user.Age}</div>
                            <div>My address is: {user.Address}</div>
                        </div>
                        <hr />
                    </React.Fragment>
                ))
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default DisplayInfo;
