import { useContext, createContext, useState, Children } from "react";

const LoginContext = createContext();
export const useLoginContext = () => {
  return useContext(LoginContext);
};

const LoginContextProvider = ({ children }) => {
  const [isLoggedin, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedin, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
