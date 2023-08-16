//this is Nothing but the class based component of User.
//React.Component is a class from where our UserClass is Inheriting the property soo we need to import react from react. 
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            // count : 0,
            // count1 : 1,
            UserInfo: {
                name: "Dummy",
                location:"India",
            }
        };
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaychavan23031998");
        const json = await data.json();
        console.log(json);
        this.setState({
            UserInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    };

    componentWillUnmount() {
        console.log("Component Will Unmount");
    };

/*
    so in case of Class Based Component, instance of our constructor get called, 
    and all props we pass 1st recived in constructor in case of class based component, and by using super key word it distributes the value.
    soo the best place to create a state variable is constructor.
    and in that we use super key word, and to access it we use this key word.
*/
    render() {
        // const {name, contact}=this.props;       //=> this is alsoo called as destructuring 
        // const {count} = this.state;     //=> this is alsoo called as destructuring 

        const {name, location, avatar_url} = this.state.UserInfo;
        return (
        <div className="user-card">
            <h1> From Class Based Component </h1>
            <img src={avatar_url} />
            <h2> Name:{name}</h2>
            <h2> Location:{location}</h2>
            <h2> Count : {count} </h2>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                });
            }}> Incress Count </button>
            
            {/* <h2> Name: {count} </h2>         */}
            {/* if we destrucure it then we can use like this as well. */}
            {/* <h2> Count : {this.state.count1} </h2> */}
            <h3> Name: {this.props.name} </h3>
            {/* <h3> Name: {name} </h3>         if we dont like to write this.props every time then we can do like this as well by storing our values as const as above done below the render.*/}
            <h3> contact: {this.props.contact}</h3>
        </div>
        );
    }
}

export default UserClass;