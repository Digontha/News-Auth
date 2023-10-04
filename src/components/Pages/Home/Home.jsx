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
             <RightSideNav></RightSideNav>
                <div className="col-span-2 ">
                    {
                        news.map(item=> <News key={item.id}  item={item}></News>)
                    }
                </div>
             <LeftSideNav></LeftSideNav>
             </div>
        </div>
    );
};

export default Home;