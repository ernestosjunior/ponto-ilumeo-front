import { RegisterTemplate } from "@/templates";
import { GetServerSidePropsContext } from "next";
import { getRegisters } from "@/services/register";
import { Registers } from "@/interfaces";

export interface RegisterProps {
  registers: Registers;
}

export default function Register(props: RegisterProps) {
  return (
    <>
      <RegisterTemplate registersApi={props.registers} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const [registers] = await Promise.all([
    getRegisters(ctx.query.code as string),
  ]);

  return { props: { registers } };
}
