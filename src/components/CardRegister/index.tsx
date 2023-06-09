import React from "react";
import * as S from "./styles";
import { getHourDifference } from "../../utils/parseTime";

export interface CardRegisterProps {
  date: string;
  entryHour: string;
  exitHour: string;
}

export const CardRegister: React.FC<CardRegisterProps> = ({
  date,
  entryHour,
  exitHour,
}) => {
  if (!date) return null;

  const label = !!exitHour
    ? getHourDifference({ date, entryHour, exitHour })
    : "Não registrou saída";

  return (
    <S.Card>
      <p className="field">{date}</p>
      <p className="field bold">{label}</p>
    </S.Card>
  );
};
