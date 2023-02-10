import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  //burda children neydi ?

  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children; // neyi dondu?
};

export default ProtectedRoute;
