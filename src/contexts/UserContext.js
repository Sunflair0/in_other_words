import React, { useState, createContext, useCallback, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const UserContext = createContext(null);

export function UserProvider(props) {
  //! Create the username / user state
  const { callAPI: logoutAPI } = useFetch("GET");
  const { callAPI: validate } = useFetch("GET");
  const [username, setUsername] = useState(null);
  const login = useCallback((uName) => {
    setUsername(uName);
  }, []);
  const logout = useCallback(async () => {
    const res = await logoutAPI(`/api/users/logout`);
    if (res.success) {
      setUsername(null);
    }
  }, []);

  useEffect(() => {
    async function valid() {
      const res = await validate("/api/users/validate");
      if (res.success) {
        login(res.data.username);
      }
    }
    valid();
  }, []);
  //! render a provider with a starting value
  //! Make sure the children are rendered inside of the provider
  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
