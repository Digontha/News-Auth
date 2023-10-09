import { useEffect, useState } from "react";
import BreakingNews from "../../HomeElement/BreakingNews";
import Header from "../../HomeElement/Header";
import LeftSideNav from "../../HomeElement/LeftSideNav";
import Navbar from "../../HomeElement/Navbar";
import RightSideNav from "../../HomeElement/RightSideNav";
import News from "../../HomeElement/News";


const Home = () => {
    const [news,setNews]=useState([])
    

    useEffect(()=>{
           fetch("news.json",)
           .then(res=>res.json())
           .then(data=>setNews(data))
    },[])

    return (
        <div>
             <Header></Header>
             <BreakingNews></BreakingNews>
             <Navbar></Navbar>
             <div className="grid md:grid-cols-4 grid-cols-1 gap-3 py-10 ">
             <div className="lg:h-screen lg:overflow-x-scroll">
             <RightSideNav></RightSideNav>
             </div>
                <div className="col-span-2 lg:h-screen lg:overflow-x-scroll">
                    {
                        news.map(item=> <News key={item.id}  item={item}></News>)
                    }
                </div>
            <div className="lg:h-screen lg:overflow-x-scroll">
            <LeftSideNav></LeftSideNav>
            </div>
             </div>
        </div>
    );
};

export default Home;