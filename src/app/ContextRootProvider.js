"use client";

import AppContext from "@/context/AppContext";
import useInitialState from "@/hooks/useInitialState";

const ContextRootProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default ContextRootProvider;
