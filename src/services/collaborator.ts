import { api } from "./api";

export const getCollaborator = async (code: string) => {
  const { data } = await api.get(`/collaborator/${code}`);

  return data;
};
