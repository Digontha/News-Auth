import { Link, useNavigate, } from "react-router-dom";
import Navbar from "../HomeElement/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {

    const { createUser } = useContext(AuthContext)
   const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password, image);
        const pathName = localStorage.getItem("pathname")
        createUser(email, password, name, image)
            .then(res => {
                console.log(res.user);
                navigate(pathName ? pathName : "/")

                updateProfile(res.user, { displayName: name, photoURL: image })
                    .then(res => {
                        console.log(res);

                    })
                    
                    sendEmailVerification(res.user)
                    .then(() => {
                        alert("Verification email sent please check you email")

                    })
            })
            .catch(error => {
                console.log(error);
            })
  
    }
    return (
        <>
            <div className="">
                <Navbar></Navbar>
            </div>

            <div className="bg-slate-200 lg:w-[50%] flex justify-center items-center h-[80vh] mx-auto mt-10">
                <div>
                    <h1 className="text-3xl py-10">
                        Login your account
                    </h1>

                    <form onSubmit={handleRegister} className="">
                        <p className="mt-4">Name</p>
                        <input className="w-full my-5 p-3 rounded-lg" type="text" name="name" id="" />
                        <br />
                        <p>Image URL</p>
                        <input className="w-full my-5 p-3 rounded-lg" type="text" name="image" id="" />
                        <br />
                        <p>Email</p>
                        <input className="w-full my-5 p-3 rounded-lg" type="email" name="email" id="" />
                        <br />
                        <p>Password</p>
                        <input className="w-full my-5 p-3 rounded-lg" type="password" name="password" id="" />
                        <br />
                        <input className="btn btn-success" type="submit" value="Register " />
                        <p className="mt-5 mb-10">Have An Account ? <Link to="/login" className="text-orange-600">Login</Link></p>

                    </form>

                </div>
            </div>
        </>
    );
};

export default Register;