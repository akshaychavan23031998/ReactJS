import React from 'react';
import ReactDOM from 'react-dom';


/*
EX-01: soo this is to create a simple single div with h4 tag in it, by React.
<div>
    <h4>Hello world From React !! </h4>
</div>

const reactheading = React.createElement("h4", {id:"heading"}, "Hello world From React !!");
console.log(reactheading);      
Note:- this nothing but the object itself, it means its NOT an any h4 tag, 
then how its getting converted to h4 tag??  the answer is while rendering
Note:- ReactElemet(this is a Object) ==> HTML(Browser Understand)

const reactroot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactroot.render(reactheading);
Note:- means while rendering my render method takes the complate object and converts it into the h4 tag 
with the all the attributes & text need to be printed into it as we given above in 3 arguments. 
*/


/*EX-02: so how i can create the nested html by using react as below

<div id="parent">
    <div id="child">
        <h4> I am Nested HTML File </h4>
    </div>
</div> 
Note:- ReactElemet(this is a Object) ==> HTML(Browser Understand)

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement("h4", {}, "I am Nested HTML File")
    )
);
console.log(parent);
reactroot.render(parent);
*/


/*EX-03: so how i can create the nested html by using react as below,
now we are going to create 2 childerens then as in 3rd argument i.e in child 
we need to create/pass the array of childrans.

<div id="parent">
    <div id="child">
        <h4> I am Nested HTML h4 tag </h4>
        <h2> I am Nested HTML h2 tag </h2>
    </div>
</div> 

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [React.createElement("h4", {}, "I am Nested HTML h4 tag "),
         React.createElement("h2", {}, "I am Nested HTML h2 tag ")
    ])
);
console.log(parent);
reactroot.render(parent);
Note:- ReactElemet(this is a Object) ==> HTML(Browser Understand)
*/
/*EX-04: so what if i wanted to make like below then,
<div id="parent">
    <div id="child">
        <h4> I am Nested HTML h4 tag </h4>
        <h2> I am Nested HTML h2 tag </h2>
    </div>
    <div id="child2">
        <h4> I am Nested HTML h4 tag </h4>
        <h2> I am Nested HTML h2 tag </h2>
    </div>
</div>

means under parent there are 2 childerns means i need to pass this
into the array.

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"}, 
        [React.createElement("h4", {}, "I am Nested HTML h4 tag "),
         React.createElement("h2", {}, "I am Nested HTML h2 tag ")
    ]),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h4", {}, "I am Nested HTML h4 tag "),
         React.createElement("h2", {}, "I am Nested HTML h2 tag ")
    ])
]);
*/
/*
Note:- so if we have observed is kii if my html is becemeing complicated then my react code
becomes very complicated & this code is not readable soo to make it readable and 
simple thenn we need to use JSX. */