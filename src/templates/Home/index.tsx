import React from "react";
import * as S from "./styles";
import { Input, Button } from "@/components";

export const HomeTemplate: React.FC = () => {
  return (
    <S.Container>
      <h1 className="logo">
        Ponto<strong>Ilumeo</strong>
      </h1>
      <section className="form">
        <Input label="Código do usuário" value="" onChange={() => null} />
        <Button onClick={() => null}>Confirmar</Button>
      </section>
    </S.Container>
  );
};
