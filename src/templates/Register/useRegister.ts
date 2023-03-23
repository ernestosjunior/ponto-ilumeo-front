import { useApp } from "@/contexts/app";
import { useEffect, useState } from "react";
import { Registers } from "@/interfaces";

interface UseRegister {
  registersApi: Registers;
}

export const useRegister = ({ registersApi }: UseRegister) => {
  const { registers, setRegisters } = useApp();

  useEffect(() => {
    setRegisters(registersApi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registersApi]);

  return { registers };
};
