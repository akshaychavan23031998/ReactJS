/*
const User = ({name, contact}) => {          => this is alsoo called as destructuring
{<h3> Name: {name} </h3> }
*/
import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user-card">
            <h1> From Functial Component </h1>
            <h2> Count :{count} </h2>
            <h2> Count :{count1} </h2>
            <h3> Name: {props.name} </h3>
            <h3> Contact: {props.contact}</h3>
        </div>
    );
};
export default User;