import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const {isAuthenticated, setisAuthenticated,logOut} = useContext(AppContext)
   
  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left"
          style={{ textDecoration: "none", color: "white" }}
        >
          
          

<h2 className="ml-5 flex items-center gap-3 font-bold text-xl">
  <img
    src="public/ChatGPT Image Nov 2, 2026, 05_00_33 PM.png"
    className="w-15 h-15  rounded-full object-contain 
    bg-white p-0.5
    transition-transform duration-300 ease-in-out 
    hover:scale-125 hover:shadow-lg cursor-pointer"
    alt="Logo"
  />
  <span className="font-extrabold tracking-wide bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:scale-110 hover:tracking-wider cursor-pointer hover:drop-shadow-lg"> Recipe Hub </span>
</h2>




        </Link>
        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/add"} className="btn btn-info mx-2">
                Add
              </Link>
              <Link to={"/profile"} className="btn btn-warning mx-2">
                Profile
              </Link>
              <div className="btn btn-danger mx-2" onClick={logOut}>LogOut</div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-warning mx-2">
                Register
              </Link>
            </>
          )}

          <Link to={"/saved"} className="btn btn-light mx-2">
            Saved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
