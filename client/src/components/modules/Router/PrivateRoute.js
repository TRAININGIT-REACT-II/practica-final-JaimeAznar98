import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";

export const PrivateRoute = (children) => {
    const {userInfo} = useSelector((state) => state.userInfo);

    if(userInfo != undefined && userInfo.token != ""){
        return children;
    }
    else return <Redirect to="/login" />
}