"use client";

import { PageTitle } from "@/components/page-title";
import { Input } from "@/components/input";
import {
  SignInPageForgetPasswordContainer,
  SignInPageForm,
} from "@/features/auth/sign-in/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInSchema, SignInSchemaProps } from "@/features/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function SignInPage() {
  const router = useRouter();

  const form = useForm<SignInSchemaProps>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInSchemaProps) => {
    console.log(data)

    localStorage.setItem("auth-token", "fake-token");
    router.push("/");
  };

  return (
    <div>
      <PageTitle
        iconName="HandshakeIcon"
        title="Bem-vindo à plataforma"
        description="Preencha com suas credenciais para acessar o sistema completo de avaliações."
      />

      <FormProvider {...form}>
        <SignInPageForm onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            type="email"
            autoComplete="off"
            label="Endereço de e-mail"
            {...form.register("email")}
          />

          <Input
            label="Senha"
            type="password"
            autoComplete="new-password"
            {...form.register("password")}
          />

          <SignInPageForgetPasswordContainer>
            <Link href="/sign-in">Esqueceu sua senha? Clique aqui</Link>
          </SignInPageForgetPasswordContainer>

          <button type="submit" title="Clique para entrar na plataforma">
            Entrar na plataforma
          </button>
        </SignInPageForm>
      </FormProvider>
    </div>
  );
}
