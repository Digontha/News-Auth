
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter =({children})=> {

    const location = useLocation()
    console.log(location);

    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div>Loading...</div>
    }
        if(user){
            return children
        }
    return <Navigate state={location.pathname} to="/login"></Navigate>
   ;
};

PrivateRouter.propTypes = {
    children: PropTypes.node
};

export default PrivateRouter;