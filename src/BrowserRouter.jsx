import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main/Main";
import Home from "./LayOut/Main/Pages/Home";
import PrivateRout from "./Privates_providers/PrivateRout";
import Dashbord from "./LayOut/Dashbord/Dashbord";
import D_Home from "./LayOut/Dashbord/Pages/D_Home";
import Login from "./Login-Out/Login";
import SignUp from "./Login-Out/SignUp";


    export   const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
              {
                  path: '/',
                  element: <Home></Home>
              },
            //   {
            //       path: '/menu',
            //       element: <Menue></Menue>
            //   },
            //   {
            //       path: '/order/:category',
            //       element: <Orders></Orders>
            //   },
              {
                  path: '/login',
                  element: <Login></Login>
              },
              {
                  path: '/signup',
                  element: <SignUp></SignUp>
              },
            //   {
            //       path: '/secret',
            //       element: <Private><Secret></Secret></Private>
            //   },
            ]
          },
          {
            path: "dashbord",
            element: <PrivateRout><Dashbord></Dashbord></PrivateRout> ,
            children: [
              {
                  path: 'd-home',
                  element:<D_Home></D_Home>
              },
            //   {
            //       path: 'addItems',
            //       element:<AdminRouts> <AddItems></AddItems> </AdminRouts>
            //   },
            //   {
            //       path: 'manageItems',
            //       element:<ManageItems></ManageItems>
            //   },
            //   {
            //       path: 'cart',
            //       element:<Cart></Cart>
            //   },
            //   {
            //       path: 'manageBookings',
            //       element:<ManageBookings></ManageBookings>
            //   },
            //   {
            //       path: 'allUsers',
            //       element:<AdminRouts> <AllUsers></AllUsers> </AdminRouts>
            //   },
             
              
            ]
          },
      ]);