"use client";

import { PageTitle } from "@/components/page-title";
import { Input } from "@/components/input";
import { SignUpPageForm } from "@/features/auth/sign-up/styles";
import { useRouter } from "next/navigation";
import { signUpSchema, SignUpSchemaProps } from "@/features/auth/schemas";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpPage() {
  const router = useRouter();

  const form = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: SignUpSchemaProps) => {
    console.log(data)

    localStorage.setItem("auth-token", "fake-token");
    router.push("/");
  };

  return (
    <div>
      <PageTitle
        title="Criar conta"
        iconName="PlusIcon"
        description="Preencha com suas credenciais para criar conta no sistema completo de avaliações."
      />

      <FormProvider {...form}>
        <SignUpPageForm onSubmit={form.handleSubmit(onSubmit)}>
          <Input type="text" label="Nome completo" autoComplete="off" {...form.register('name')} />
          <Input type="email" label="Endereço de e-mail" autoComplete="off" {...form.register('email')} />
          <Input type="tel" label="Telefone" autoComplete="off" {...form.register('phone')} />
          <Input type="password" label="Senha" autoComplete="new-password" {...form.register('password')} />

          <button type="submit" title="Clique para entrar na plataforma">
            Criar conta na plataforma
          </button>
        </SignUpPageForm>
      </FormProvider>
    </div>
  );
}
