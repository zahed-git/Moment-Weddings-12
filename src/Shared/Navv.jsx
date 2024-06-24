
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
  Tooltip,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  BuildingLibraryIcon,
  UserCircleIcon,
  UsersIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";



const Navv = () => {
  const { user, logOut } = useAuth()
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const handleLogOut = () => {
    logOut()
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out successfully",
          showConfirmButton: false,
          timer: 1500
        });
      
  }

  // profile menu component
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
  ];

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Tooltip content={user?.displayName}>
            <Avatar
              variant="circular"
              size="sm"
              alt="user"
              className="border border-gray-900 p-0.5"
              src={user?.photoURL}
            />
            </Tooltip>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (

              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                  }`}
              >
                {React.createElement(icon, {
                  className: 'h-4 w-4' ,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color= "inherit"
                >
                  {label}
                </Typography>

              </MenuItem>

            );
          })}
          {/* ------------------------------ */}
          <div className="flex">
            {
              user?
              <>
              {React.createElement(PowerIcon, {
            className: 'h-4 w-4 text-red-500',
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            <button onClick={handleLogOut}>Sign Out</button>
          </Typography>
              </>:<>
              </>
            }
          
          </div>
          
        </MenuList>
      </Menu>
    );
  }







  function NavList() {
    return (
      <div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">


        <NavLink to='/'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(UserCircleIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900">Home</span>
        </MenuItem></NavLink>
        <NavLink to='/biodata'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(UsersIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900"> Biodatas</span>
        </MenuItem></NavLink>
        <NavLink to='/create'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(BuildingLibraryIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900"> Create Your Biodata</span>
        </MenuItem></NavLink>
        <NavLink to='/about'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(RocketLaunchIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900"> About Us</span>
        </MenuItem></NavLink>
        <NavLink to='/contact'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(BookOpenIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900">Contact Us</span>
        </MenuItem></NavLink>
       

        {
          user ?
            <>
             <NavLink to='dashbord'><MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(Square3Stack3DIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900">Dashboard</span>
        </MenuItem></NavLink>
            </> : <>
              <NavLink to='/login'><MenuItem className="flex items-center gap-2 lg:rounded-full">
                {React.createElement(CubeTransparentIcon, { className: "h-[18px] w-[18px]" })}{" "}
                <span className="text-gray-900"> Login</span>
              </MenuItem></NavLink>
            </>
        }


      </div>
    );
  }



  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
  return (
    <div className="fixed lg:w-full flex z-40">
      <Navbar className=" max-w-screen-xl p-2 lg:rounded-full lg:pl-6 opacity-70">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <span className=" text-red-700">MOMENTS</span> <span className="text-amber-700">WEDDINGS</span>
          </Typography>
          <div className="hidden lg:block">
            {/* -------------------------for lg            */}
            <NavList />

          </div>
          {/* --------------Icon---------for small         */}
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu />
        </div>
        {/* --------------for small      */}
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Navv