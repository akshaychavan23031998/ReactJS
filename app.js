import React from 'react';
import ReactDOM, { render } from 'react-dom';
/*
React Element:- 
1st way:- Create a element using the React.
React.createElement => React Element (Creates an Object) => when we Render with root => its becomes an HTML.
const heading = React.createElement("h3", {id:"h3"}, "Namaste into the H3 Tag");
console.log(heading);    //its an object i.e element.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
React.createElement => Creates an Object => when we Render with root => its becomes an HTML.
*/

/*
2nd way:- Create a element using the JSX.
JSX => bebal transpiles the code to => React.createElement => Creates an Object => when we Render with root => its becomes an HTML.
const jsxheading = <h3 id="h3"> Namaste into jsxheading </h3>
root.render(jsxheading);
*/

/*
Note:-
soo what happen is kii when i render this with my root
whatever is there is in root (index.html) it will be 
replaced by [root.render(heading);]
if its not rendered then we will see the h3 tag from index.html
and the msg is Not Rendered.
*/

/*
React Components:-
const root = ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponet = () => {
    return <h3> Namaste From HeadingComponet </h3>
}
All so can be written as.
const HeadingComponet1 = () => (
    <h3> Namaste From HeadingComponet1 </h3>
);
we can alsoo write this as below by removing the retrn work soo that it becomes in single line.
const HeadingComponet2 = () => <h3> Namaste From HeadingComponet2 </h3>;
naw how to render this components ??

root.render(heading);                    // Render of Element.
root.render(<HeadingComponet />);           // Render of components.
root.render(<HeadingComponet1 />);
root.render(<HeadingComponet2 />);
*/

const Titel = () => {
    <h1 className='head' tabIndex="5"> Namaste from Title </h1>
}
//component composition:- a component under another componet.
const number = 10000;
const HeadingComponet = () => {
    <div id='container'>
        <Titel />   
        <Title></Title>
        {Titel()}
        {number}                 
        <h3 className='heading'> Namaste From HeadingComponet </h3>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet />);


