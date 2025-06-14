import { useState } from "react";
import { AuthContext } from "../context/index";

export function AuthPorvider({ children }) {
  const [auth, setAuth] = useState({});
  console.log(auth);
  const url = import.meta.env.VITE_SERVER_BASE_URL;
  return (
    <AuthContext.Provider value={{ auth, setAuth, url }}>
      {children}
    </AuthContext.Provider>
  );
}
