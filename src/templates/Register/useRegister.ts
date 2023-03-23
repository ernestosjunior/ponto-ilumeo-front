import { useApp } from "@/contexts/app";
import { useEffect } from "react";
import { Registers } from "@/interfaces";
import { postRegisters, getRegisters } from "@/services/register";
import { toast } from "react-hot-toast";

interface UseRegister {
  registersApi: Registers;
}

export const useRegister = ({ registersApi }: UseRegister) => {
  const { registers, setRegisters, code } = useApp();

  const getNewRegisters = () =>
    getRegisters(code).then((data) => {
      setRegisters(data);
    });

  const handleRegister = () => {
    const myPromise = postRegisters(code);

    try {
      toast.promise(
        myPromise,
        {
          loading: "Salvando",
          success: () => {
            getNewRegisters();

            return "Sucesso";
          },
          error: "Tente novamente",
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    } catch (error: any) {
      return toast.error(error.message);
    }
  };

  useEffect(() => {
    setRegisters(registersApi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registersApi]);

  return { registers, code, handleRegister };
};
