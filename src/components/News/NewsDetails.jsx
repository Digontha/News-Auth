import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsDetailsCard from "./NewsDetailsCard";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NewsDetails = ()=> {
       const {_id} = useParams()
       const {user}=useContext(AuthContext)
       const [news,setNews] =useState([])
       const [items,setItems]=useState([])
       
       useEffect(()=>{
                fetch(`news.json`)
               .then(res=>res.json())
               .then(data=>setNews(data))
               
               const filterData = news.filter(item=>item._id == _id)
               setItems(filterData)
              
       },[_id,news])
      

    return (
        <div>
             {
               user.emailVerified === true ?
               items.map(item=><NewsDetailsCard key={item._id} item={item}></NewsDetailsCard>)
               :
               <h1 className="text-5xl text-center mt-10">Please verify your email</h1>
             }
        </div>
    );
};


export default NewsDetails;