import React, { useState } from "react";
import * as S from "./styles";
import { Input, Button } from "@/components";
import { useApp } from "@/contexts/app";

export const HomeTemplate: React.FC = () => {
  const [code, setCode] = useState("");
  const { handleLogin } = useApp();

  return (
    <S.Container>
      <h1 className="logo">
        Ponto<strong>Ilumeo</strong>
      </h1>
      <section className="form">
        <Input
          label="Código do usuário"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button disabled={!code} onClick={() => handleLogin(code)}>
          Confirmar
        </Button>
      </section>
    </S.Container>
  );
};
