import { Navigate } from "react-router-dom";
import { useAuth } from "Utils/authProvider";

const PrivateRoute = ({ component: Component, display = "all", ...rest }) => {
  const { state } = useAuth();

  // return state?.isAuthenticated ? (
  //   <Component {...rest} />
  // ) : (
  //   <Navigate to="/login" replace />
  // );

  if (state.isAuthenticated) {
    if (display === "all") {
      return <Component {...rest} />;
    }
    if (display === state.user.role) {
      return <Component {...rest} />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  } else {
    <Navigate to="/login" replace />;
  }
};
export default PrivateRoute;
