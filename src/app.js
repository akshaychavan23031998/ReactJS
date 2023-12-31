import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import Menu from './components/Menu';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import React, {lazy} from 'react';
import { Provider } from 'react-redux';
import appStore from './utills/appStore';

const contact = lazy(() => import("./components/Contactus"));   //ill load my contact lazy loading.

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet/>
            </div>
        </Provider>
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


