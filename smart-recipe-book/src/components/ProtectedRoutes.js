import { Outlet } from "react-router-dom";

import TheFeed from "../pages/Logged-Out/TheFeed";

let user = false;
const useAuth = () => {
    if(sessionStorage.getItem("id") !== null) {
        user = true;
    } else {
        user = false;
    }
    return user;
};

function ProtectedRoutes() {
    const isAuth = useAuth();
    return (
        isAuth ? <Outlet/> : <TheFeed/>
    );
};

export default ProtectedRoutes;