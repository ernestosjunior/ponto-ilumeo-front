import { api } from "./api";

export const getRegisters = async (code: string) => {
  const {
    data: { message, data },
  } = await api.get(`/collaborator/${code}`);

  if (message !== "OK") return;

  return data.registers;
};
