import { createContext, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  // LOGIN
  const login = async (email, password) => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      setToken(data.token);
      setEmail(data.email);

    } catch (error) {
      console.log(error);
    }
  };

  // REGISTER
  const register = async (email, password) => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      setToken(data.token);
      setEmail(data.email);

    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    setEmail("");
  };

  // PERFIL
  const getProfile = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;