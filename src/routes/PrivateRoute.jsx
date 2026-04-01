/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const location = useLocation();

  if (loading) {
    return <h1>LOADING......</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>;
};

export default PrivateRoute;
