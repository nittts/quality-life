import jwtDecode from "jwt-decode";
import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = (token) => {
    const { user_id } = jwtDecode(token);
    api.get(`/users/${user_id}/`).then((res) => {
      setUser(res.data);
    });
  };

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
