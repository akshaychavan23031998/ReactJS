import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import Menu from './components/Menu';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

const approuter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children : [
            {
                path: '/',
                element: <Body/>,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contactus',
                element: <Contactus />,
            },
            {
                path: '/menu/:id',
                element: <Menu />,
            },
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={approuter} />);


