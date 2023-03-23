import React from "react";
import * as S from "./styles";
import { CardRegister, Button, Stopwatch } from "@/components";

export const RegisterTemplate: React.FC = () => {
  const entryHour = "18:00:00";
  const buttonLabel = !!entryHour ? "Hora de saída" : "Hora de entrada";
  return (
    <S.Container>
      <section className="top">
        <div className="user">
          <h1 className="title">Relógio de ponto</h1>
          <div>
            <p className="title">#4SXXFMF</p>
            <span className="label">Usuário</span>
          </div>
        </div>
        <Stopwatch date="22/03/2023" entryHour={entryHour} />
        <Button onClick={() => null}>{buttonLabel}</Button>
      </section>
      <CardRegister date="22/03/2023" entryHour="18:00" exitHour="22:00" />
    </S.Container>
  );
};
