import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.user };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState, (initial) => {
    const persistedState = localStorage.getItem("authState");
    return persistedState ? JSON.parse(persistedState) : initial;
  });

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  const login = (user) => dispatch({ type: "LOGIN", user });
  const logout = () => dispatch({ type: "LOGOUT" });

  const contextValue = useMemo(
    () => ({
      state,
      login,
      logout,
    }),
    [state, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
