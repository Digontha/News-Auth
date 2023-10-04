import { useEffect, useState } from "react";
import {  CiCalendarDate } from "react-icons/ci";
import photo1 from "../../../public/1.png"
import photo2 from "../../../public/2.png"
import photo3 from "../../../public/3.png"
import moment from "moment";

const RightSideNav = () => {

     const [category,setCategory] = useState([])
     
     useEffect(()=>{
            fetch("categories.json")
            .then(res=>res.json())
            .then(data=>setCategory(data))
     },[])


    return (
        <div className=""> 
        <h1 className="text-xl font-semibold">All Category</h1>
             <div>
                {
                    category.map(news=> <h1  className="p-3 hover:bg-gray-200 cursor-pointer hover:font-bold rounded-lg" key={news.id}>{news.name}</h1>)
                }
             </div>

             <div className="py-16 space-y-10">
                <div className="space-y-4">
                    <img src={photo1} alt=""/>
                    <p className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex  ">
                        <p>Sports</p>
                        <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> {moment().format("MMM D , YYYY")} </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={photo2} alt=""/>
                    <p className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex ">
                        <p>Sports</p>
                        <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> {moment().format("MMM D , YYYY")} </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={photo3} alt=""/>
                    <p className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex  ">
                        <p>Sports</p>
                        <p className="flex items-center gap-3"><CiCalendarDate></CiCalendarDate> {moment().format("MMM D , YYYY")} </p>
                    </div>
                </div>
             </div>

        </div>
    );
};

export default RightSideNav;