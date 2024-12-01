import { Navigate } from "react-router-dom";
import { useAuth } from "Utils/authProvider";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  return isAuthenticated && restricted ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;
