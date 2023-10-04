import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About/About";
import Career from "../components/Pages/Career/Career";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NewsDetails from "../components/News/NewsDetails";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
              path: "/:_id",
              element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
              loader:()=>fetch(`news.json`)
        },
        {
        
            path: "/about",
            element: <About></About>
        },
        {
        
            path: "/career",
            element:<Career></Career>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
    ]
    
    }
])

export default router;