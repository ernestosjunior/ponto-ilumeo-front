import React from "react";
import * as S from "./styles";

export interface InputProps {
  disabled?: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  onChange,
  ...props
}) => {
  return (
    <S.Input>
      <label className="label">{label}</label>
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.Input>
  );
};
