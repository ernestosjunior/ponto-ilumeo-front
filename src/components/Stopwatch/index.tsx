import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import {
  getHourDifference,
  getHourDifferenceToday,
} from "../../utils/parseTime";

export interface StopwatchProps {
  date: string;
  entryHour?: string;
  exitHour?: string;
}

export const Stopwatch: React.FC<StopwatchProps> = ({
  date,
  entryHour,
  exitHour,
}) => {
  const [time, setTime] = React.useState(() => {
    if (!exitHour) return getHourDifferenceToday({ date, entryHour });

    return getHourDifference({ date, entryHour, exitHour });
  });

  const router = useRouter();

  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (entryHour && !exitHour && !intervalId.current) {
      intervalId.current = setInterval(() => {
        setTime(getHourDifferenceToday({ date, entryHour }));
      }, 1000);
    }

    if (entryHour && exitHour) {
      setTime(getHourDifference({ date, entryHour, exitHour }));
    }

    return () => {
      if (!router.asPath.includes("/registrar-ponto") && intervalId.current)
        clearInterval(intervalId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryHour, exitHour]);

  return (
    <S.Container>
      <p className="time">{time}</p>
      <span className="label">Horas de hoje</span>
    </S.Container>
  );
};
