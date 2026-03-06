import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const nav = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(()=>{
    localStorage.setItem("currentUser", JSON.stringify(user));
  },[user]);

  const register = (email,password)=>{

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u=>u.email===email);
    if(exists) return "User already exists";

    users.push({email,password});
    localStorage.setItem("users", JSON.stringify(users));

    return "Registered";
  };

  const login = (email,password)=>{

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      u=>u.email===email && u.password===password
    );

    if(!found) return "Invalid credentials";

    setUser(found);
    nav("/home");
  };

  const googleLogin = ()=>{
    const mockUser = { email:"googleuser@test.com" };
    setUser(mockUser);
    nav("/home");
  };

  const facebookLogin = ()=>{
    const mockUser = { email:"fbuser@test.com" };
    setUser(mockUser);
    nav("/home");
  };

  const logout = ()=>{
    setUser(null);
    localStorage.removeItem("currentUser");
    nav("/");
  };

  return(
    <AuthContext.Provider value={{
      user,
      register,
      login,
      googleLogin,
      facebookLogin,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
};