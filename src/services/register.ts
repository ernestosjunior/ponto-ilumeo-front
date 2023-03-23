import { api } from "./api";

export const getRegisters = async (code: string) => {
  const {
    data: { message, data },
  } = await api.get(`/register/${code}`);

  if (message !== "OK") return;

  return data.registers;
};

export const postRegisters = async (code: string) => {
  const {
    data: { message, data },
  } = await api.post(`/register`, { code });

  if (message !== "OK") return null;

  return data;
};
