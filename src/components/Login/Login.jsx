import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../HomeElement/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

      const {loginUser}=useContext(AuthContext)
      const location = useLocation()
      const navigate = useNavigate()
    const handleLogin = (e)=>{
                   
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            
            loginUser(email,password)
            .then(res=>{
                console.log(res.user);
                navigate(location?.state ? location.state : "/")
            })
            .catch(error=>{
                console.log(error);
            })
    }


    return (
        <>
            <div className="mt-10">
            <Navbar></Navbar>
            </div>

            <div className="bg-slate-200 w-[50%] flex justify-center items-center h-[50vh] mx-auto mt-40">
                <div>
                <h1 className="text-3xl py-10">
                    Login your account
                </h1>
                 
                 <form onSubmit={handleLogin} className="">
                    <p>Email</p>
                    <input className="w-full my-5 p-3 rounded-lg" type="email" name="email" id="" />
                    <br />
                    <p>Password</p>
                    <input className="w-full my-5 p-3 rounded-lg"  type="password" name="password" id="" />
                    <br />
                    <input className="btn btn-success" type="submit" value="Login "/>
                    <p className="mt-5 mb-4">Dont’t Have An Account ? <Link to="/register" className="text-orange-600">Register</Link></p>

                 </form>

                </div>
            </div>
        </>
    );
};

export default Login;