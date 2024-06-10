import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main/Main";
import Home from "./LayOut/Main/Home/Home";
import PrivateRout from "./Privates_providers/PrivateRout";
import Dashbord from "./LayOut/Dashbord/Dashbord";
import Login from "./Login-Out/Login";
import SignUp from "./Login-Out/SignUp";
import Detail from "./LayOut/Main/Home/Detail";
import Biodata from "./LayOut/Main/Biodata/Biodata";
import DetailBio from "./LayOut/Main/Biodata/DetailBio";
import EditBio from "./LayOut/Dashbord/Pages/EditBio";
import ViewBio from "./LayOut/Dashbord/Pages/ViewBio";
import MyContactReq from "./LayOut/Dashbord/Pages/MyContactReq";
import FavBio from "./LayOut/Dashbord/Pages/FavBio";
import Admin from "./LayOut/Dashbord/Pages/Admin";
import ManageUser from "./LayOut/Dashbord/Pages/ManageUser";
import ApprovPremium from "./LayOut/Dashbord/Pages/ApprovPremium";
import ApproveConReq from "./LayOut/Dashbord/Pages/ApproveConReq";
import AdminRout from "./Privates_providers/AdminRout";


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
              {
                  path: '/biodata',
                  element: <Biodata></Biodata>
              },
              {
                  path: '/biodetail/:_id',
                  element: <PrivateRout><DetailBio></DetailBio></PrivateRout>
              },
             
            ]
          },
          {
            path: "dashbord",
            element: <PrivateRout><Dashbord></Dashbord> </PrivateRout>,
            children: [
              
              {
                  path: 'editbio',
                  element:<EditBio></EditBio>
              },
              {
                  path: 'viewbio',
                  element:<ViewBio></ViewBio>
              },
              {
                  path: 'my-con-req',
                  element:<MyContactReq></MyContactReq>
              },
              {
                  path: 'my-fav-bio',
                  element:<FavBio></FavBio>
              },
              {
                  path: 'admin',
                  element:<AdminRout><Admin></Admin></AdminRout> 
              },
              {
                  path: 'manageUser',
                  element:<AdminRout><ManageUser></ManageUser></AdminRout>
              },
              {
                  path: 'approvePremium',
                  element:<AdminRout><ApprovPremium></ApprovPremium></AdminRout>
              },
              {
                  path: 'approveContactReq',
                  element:<AdminRout><ApproveConReq></ApproveConReq></AdminRout>
              },
            
             
              
            ]
          },
      ]);