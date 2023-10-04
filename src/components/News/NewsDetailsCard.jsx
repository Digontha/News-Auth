
import PropTypes from 'prop-types';
import LeftSideNav from '../HomeElement/LeftSideNav';
import Header from '../HomeElement/Header';
import Navbar from '../HomeElement/Navbar';

const NewsDetailsCard = ({item}) => {
    const {  title, image_url, details,} = item || {};
    return (
<>

         <Header></Header>
         <Navbar></Navbar>
<div className='grid grid-cols-4 gap-3'>
               <div className='col-span-3 space-y-5'>
                <img src={image_url} alt="" />
                <p className='font-bold'>{title}</p>
                <p>{details}</p>
               </div>
                 
                 <div>
                    <LeftSideNav></LeftSideNav>
                 </div>
        </div>

</>
       
    );
};

NewsDetailsCard.propTypes = {
     item: PropTypes.object
};

export default NewsDetailsCard;