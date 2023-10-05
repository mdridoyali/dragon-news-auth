import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loader } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if(loader){
        return <span className="loading loading-infinity loading-lg flex justify-center items-center h-[80vh] border " ></span>
    }

if(user){
    return children;
}
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>;
};

export default PrivetRoute;