import { useNavigate } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";
import { authInitialState, authReducer } from "../reducer/reducer";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    authDispatch({
      type: "LOGOUT",
      payload: { message: "You have successfully logged out." },
    });
    setTimeout(() => {
      authDispatch({
        type: "CLEAR_MSG",
      });
    }, 1500);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
