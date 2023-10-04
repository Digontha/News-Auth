import { Link, NavLink } from "react-router-dom";
import userImg from "../../../public/user.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
      const {user,logOut}=useContext(AuthContext)
    const Links = <>
                 <li><NavLink  to="/">Home</NavLink></li>
                 <li><NavLink  to="/about">About</NavLink></li>
                 <li ><NavLink to="/career">Career</NavLink></li>
    </>
   const handleLogOut=()=>{
    logOut()
    .then(res=>{
        console.log(res.user);
    })
    .catch(error=>{
        console.log(error);
    })
   }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                   {Links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? 
                     <><p>{user.displayName}</p><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /> <Link><button onClick={handleLogOut} className="btn btn-warning btn-sm">Sign out</button></Link></>

                    :  
                    
                    <><img className="w-10 h-10" src={userImg} alt="" /> <Link to="/login"><button className="btn btn-warning btn-sm">Login</button></Link></>
                }
              
            </div>
        </div>
    );
};

export default Navbar;