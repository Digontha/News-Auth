import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import zone1 from "../../../public/qZone1.png"
import zone2 from "../../../public/qZone2.png"
import zone3 from "../../../public/qZone3.png"
import BG from "../../../public/bg1.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LeftSideNav = () => {
      
    const {signInWithGoogle,signInWithGithub} = useContext(AuthContext)

    const handleGoogle = ()=>{
            signInWithGoogle()
            .then((res)=>{
                console.log(res.user);
                alert("Successfully logged with Google")
            })
            .catch((error)=>{
                console.log(error);
                alert("Something went wrong with Google")
 
            })
    }
    const handleGithub = ()=>{
            signInWithGithub()
            .then((res)=>{
                console.log(res.user);
                alert("Successfully logged with Github")
            })
            .catch((error)=>{
                console.log(error);
                alert("Something went wrong with Github")
 
            })
    }

    return (
        <div className="">
            <div className="flex flex-col space-y-3">
                <h1 className="text-xl font-semibold">Login with</h1>
                <button onClick={handleGoogle} className="btn btn-neutral btn-xs"><FaGoogle></FaGoogle> Google</button>
                <button onClick={handleGithub} className="btn btn-neutral btn-xs"><FaGithub></FaGithub> Github</button>
            </div>

            <div className="py-10 ">
                <h1 className="text-xl font-semibold">Find Us On</h1>
                <div className="">
                    <a className="flex items-center gap-4 border rounded-t-lg p-3"> <FaFacebook></FaFacebook> Facebook</a>
                    <a className="flex items-center gap-4 border-x p-3"><FaTwitter></FaTwitter> Twitter</a>
                    <a className="flex items-center gap-4 border rounded-b-lg p-3"><FaInstagram></FaInstagram> Instagram</a>
                </div>

            </div>

            <div className="py-10 bg-slate-100 p-4 rounded-lg">
                <h1 className="text-xl font-semibold mb-6">Q-Zone</h1>
                <div className="">
                    <img src={zone1} alt="" />
                    <img src={zone2} alt="" />
                    <img src={zone3} alt="" />
                </div>

            </div>

         <div className="py-10">
         <div className="hero h-[500px] " style={{ backgroundImage: `url(${BG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Create an Amazing Newspaper</h1>
                        <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more..</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default LeftSideNav;