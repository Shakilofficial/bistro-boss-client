/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="mx-auto flex justify-center items-center loading loading-spinner loading-lg text-neutral"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
