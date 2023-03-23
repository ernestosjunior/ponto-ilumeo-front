import moment from "moment";

const format = "DD/MM/YYYY HH:mm:ss";

export const getHourDifference = ({
  date,
  entryHour,
  exitHour,
}: {
  date: string;
  entryHour?: string;
  exitHour: string;
}) => {
  if (!entryHour) return "0h 00m";

  const entry = `${date} ${entryHour}`;
  const current = `${date} ${exitHour}`;

  const ms = moment.utc(current, format).diff(moment.utc(entry, format));

  const d = moment.duration(ms);

  return Math.floor(d.asHours()) + "h" + moment.utc(ms).format(" mm") + "m";
};

export const getHourDifferenceToday = ({
  date,
  entryHour,
}: {
  date: string;
  entryHour?: string;
}) => {
  const [_, current] = moment().utc().format(format).split(" ");

  return getHourDifference({ date, entryHour, exitHour: current });
};
