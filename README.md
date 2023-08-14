# Namaste React

# parcel
-Dev Build
-local Server
-HMR :- Hot Module Replacement
-file watching algorithum build in C++  
-cacheing - faster builds
-image optimization
-minification
-bundling
-compressing
-consistance hashing
-code splitting
-Diffrential bundlling - support older versions of browser
-Diagnostic
-error handling
-tree sheaking :- it will remove the unused code
-diffrent dev & production Bundles

# Low Level Component Design:- 
Food App
    -Header
        -Logo
        -Nav Bar
    -Body
        -Search Barc
        -Restorent Container
            - Restorent Cards
    -Footer
        -CopyRight
        -Links
        -Address
        -Contact

        /*Note:-    About useState:-
            soo what is happing ver here is kii when i click on it my data 
            in the console get filter out but my UI is not getting updated,
            soo to resolve this issue we use Hooks for this problem we will 
            use useState, which utility function, which is simple Normal JS Function.
*/

we used useState function to sort out and diplay the Highrated reasorents.
we used useEffect function to fetch my API data from the backend.

# UseEffect Hooks:- 
case.01:- if No dependancy array the useEffect will be called on every render.
Ex:-
    useEffect(() => {
        console.log("No Empty Array");
    });

case.02:-if Dependancy array is empty = [] => use Effect is called on initial Render (Just Once).
Ex:-
    useEffect(() => {
        console.log("No Empty Array");
    }, []);

case.03:-if Dependancy array is [btnName] => called everytime btnName is updated.
Ex:-
    useEffect(() => {
        console.log("No Empty Array");
    }, [btnName]);