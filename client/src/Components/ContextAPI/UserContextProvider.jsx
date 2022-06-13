import { useState } from "react";
import { UserContext } from "./CreateContext";

const UserContextProvider = ({ children }) => {
  const [value, setValue] = useState("Hello From Provider");
  return (
    <UserContext.Provider value={{ value, setValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
