import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Registers } from "@/interfaces";

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextProps {
  code: string;
  registers: Registers;
  setRegisters: Dispatch<SetStateAction<Registers>>;
}

const AppContext = createContext({} as AppContextProps);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [code, setCode] = useState("");
  const [registers, setRegisters] = useState({} as Registers);

  return (
    <AppContext.Provider value={{ code, registers, setRegisters }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const app = useContext(AppContext);

  return app;
};
