import React from "react";
import * as S from "./styles";
import { CardRegister, Button, Stopwatch } from "@/components";
import { useRegister } from "./useRegister";
import { Register, Registers } from "@/interfaces";
import ScrollContainer from "react-indiana-drag-scroll";

export const RegisterTemplate: React.FC<{ registersApi: Registers }> = ({
  registersApi,
}) => {
  const { registers } = useRegister({ registersApi });
  const restRegisters = registers.others;

  const entryHour = registers.current?.entryHour;
  const exitHour = registers.current?.exitHour;

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
        <Stopwatch
          date="22/03/2023"
          entryHour={entryHour}
          exitHour={exitHour}
        />
        <Button disabled={!!entryHour} onClick={() => null}>
          {buttonLabel}
        </Button>
      </section>
      <div className="bottom">
        <h2 className="title">Dias anteriores</h2>
        <ScrollContainer
          horizontal={false}
          hideScrollbars={false}
          className="scroll"
        >
          {restRegisters?.map((item: Register) => (
            <CardRegister
              key={item.id}
              date={item.date}
              entryHour={item.entryHour}
              exitHour={item.exitHour}
            />
          ))}
        </ScrollContainer>
      </div>
    </S.Container>
  );
};
