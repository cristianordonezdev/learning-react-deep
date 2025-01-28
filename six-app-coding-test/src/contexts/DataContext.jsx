import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Hello from Context");
  const [headerMessage, setHeaderMessage] = useState("Initial Header Message");

  const updateHeaderMessage = (message) => {
    setHeaderMessage(message);
  };

  return (
    <DataContext.Provider value={{ data, setData, headerMessage, updateHeaderMessage }}>
      {children}
    </DataContext.Provider>
  );
};