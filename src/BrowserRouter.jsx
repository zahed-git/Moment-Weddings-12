import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main/Main";
import Home from "./LayOut/Main/Home/Home";
import PrivateRout from "./Privates_providers/PrivateRout";
import Dashbord from "./LayOut/Dashbord/Dashbord";
import D_Home from "./LayOut/Dashbord/Pages/D_Home";
import Login from "./Login-Out/Login";
import SignUp from "./Login-Out/SignUp";
import Detail from "./LayOut/Main/Home/Detail";


    export   const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
              {
                  path: '/',
                  element: <Home></Home>
              },
              {
                  path: '/detail/:_id',
                  element:<PrivateRout><Detail></Detail></PrivateRout> 
              },
            //   
              {
                  path: '/login',
                  element: <Login></Login>
              },
              {
                  path: '/signup',
                  element: <SignUp></SignUp>
              },
             
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
            
             
              
            ]
          },
      ]);