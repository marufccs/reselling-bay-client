import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useBuyer from "../../hooks/useBuyer";
import Loader from "../../Shared/Loader/Loader";
import { AuthContext } from "../../UserContext/UserContext";

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();
    
    if(loading || isBuyerLoading){
        return <Loader/>
    }

    if (user && isBuyer) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;