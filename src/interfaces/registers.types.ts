export interface Registers {
  current: Register;
  others: Register[];
}

export type Register = {
  id: string;
  date: string;
  entryHour: string;
  exitHour: string;
  collaboratorId: string;
  createdAt: string;
  updatedAt: string;
};
