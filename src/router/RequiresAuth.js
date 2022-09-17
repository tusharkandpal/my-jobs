import { useAuth } from "../context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const { pathname } = useLocation();

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: pathname }} />
      )}
    </>
  );
};
