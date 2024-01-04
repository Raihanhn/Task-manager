"use client";

import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];
  const [isLoading, setIsLoading] = useState(false);

  const [tasks, setTasks] = useState([]);

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");
      console.log(res.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    allTasks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
