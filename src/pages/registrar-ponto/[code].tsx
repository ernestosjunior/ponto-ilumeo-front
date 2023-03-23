import { RegisterTemplate } from "@/templates";
import { GetServerSidePropsContext } from "next";
import { getRegisters } from "@/services/register";
import { Registers } from "@/interfaces";
import Head from "next/head";

export interface RegisterProps {
  registers: Registers;
}

export default function Register(props: RegisterProps) {
  return (
    <>
      <Head>
        <title>Ponto Ilumeo | Registrar ponto</title>
      </Head>
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
