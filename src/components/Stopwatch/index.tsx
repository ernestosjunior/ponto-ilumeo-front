import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import { getHourDifferenceToday } from "../../utils/parseTime";

export interface StopwatchProps {
  date: string;
  entryHour?: string;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ date, entryHour }) => {
  const [time, setTime] = React.useState(
    getHourDifferenceToday({ date, entryHour })
  );

  const router = useRouter();

  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (entryHour && !intervalId.current) {
      intervalId.current = setInterval(() => {
        setTime(getHourDifferenceToday({ date, entryHour }));
      }, 1000);
    }

    return () => {
      if (!router.asPath.includes("/registrar-ponto") && intervalId.current)
        clearInterval(intervalId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryHour]);

  return (
    <S.Container>
      <p className="time">{time}</p>
      <span className="label">Horas de hoje</span>
    </S.Container>
  );
};
