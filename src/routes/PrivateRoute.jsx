import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return (
          <div className="flex justify-center h-screen items-center">
            <div className="">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
          </div>
        );
      }
    
    

      if (!user) {
    
        return <Navigate to="/login"></Navigate>;
      } else {
        return children;
      }
};

export default PrivateRoute;