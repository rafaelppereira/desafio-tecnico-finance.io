"use client";

import {
  AuthLayoutContainer,
  AuthLayoutFooter,
  AuthLayoutFooterCopyrightIcon,
  AuthLayoutHeader,
  AuthLayoutHeaderContainer,
  AuthLayoutHero,
} from "@/features/auth/layout.style";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (token) {
      router.replace("/");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null;

  return (
    <AuthLayoutContainer>
      <AuthLayoutHero>
        <div />
      </AuthLayoutHero>

      <AuthLayoutHeaderContainer>
        <AuthLayoutHeader>
          <Link href="/">
            <Image
              width={208}
              height={38}
              quality={80}
              src="/logo.svg"
              alt="Imagem da logo do Finance.IO"
            />
          </Link>

          <div>
            <span>Ainda não é cliente?</span>

            {pathname === "/sign-in" ? (
              <Link href="/sign-up" title="Clique para se inscrever agora">
                Inscrever-se agora
              </Link>
            ) : (
              <Link href="/sign-in" title="Clique para se inscrever agora">
                Entrar agora
              </Link>
            )}
          </div>
        </AuthLayoutHeader>

        {children}

        <AuthLayoutFooter>
          <span>
            <AuthLayoutFooterCopyrightIcon />
            {new Date().getFullYear()} Finance.IO, todos os direitos reservados
            <strong>|</strong>
            <Link href="https://rpdesenvolvimentos.com.br" target="_blank">
              @rafaelppereira
            </Link>
          </span>
        </AuthLayoutFooter>
      </AuthLayoutHeaderContainer>
    </AuthLayoutContainer>
  );
}
