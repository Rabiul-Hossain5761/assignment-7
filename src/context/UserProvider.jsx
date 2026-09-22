import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [storedHistory, setStoreHistory] = useState([]);

  const handleAction = (user, action) => {
    console.log("button clicked");
    const historyData = { ...user, action: action };
    setStoreHistory([...storedHistory,historyData]);
  };
  const data = {
    handleAction,storedHistory,setStoreHistory
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
