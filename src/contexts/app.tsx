import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Registers } from "@/interfaces";
import { getCollaborator } from "@/services/collaborator";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextProps {
  code: string;
  registers: Registers;
  setRegisters: Dispatch<SetStateAction<Registers>>;
  handleLogin: (code: string) => void;
}

const AppContext = createContext({} as AppContextProps);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [code, setCode] = useState("");
  const [registers, setRegisters] = useState({} as Registers);

  const router = useRouter();

  const handleLogin = async (code: string) => {
    try {
      const myPromise = getCollaborator(code);

      toast.promise(
        myPromise,
        {
          loading: "Autenticando",
          success: (res) => {
            setCode(res.data.code);
            router.push(`/registrar-ponto/${res.data.code}`);
            return "Sucesso";
          },
          error: () => "Código do usuário inválido",
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    } catch (error) {
      return toast.error("Código do usuário inválido");
    }
  };

  return (
    <AppContext.Provider value={{ code, registers, setRegisters, handleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const app = useContext(AppContext);

  return app;
};
