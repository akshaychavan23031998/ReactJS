import User from "./User";
import UserClass from "./Userclass";

const About = () => {
    return (
        <div>
            <h1> This Is About Page </h1>
            <h3> This is All About Functial & Class Based Component </h3>
            {/* <User name={"Akshay Chavan (Functial Component)"} contact={"8180004924"} /> */}
            
            <UserClass name={"Akshay Chavan (Class Component)"} contact={"8180004924"} />
        </div>
    )
};
export default About;