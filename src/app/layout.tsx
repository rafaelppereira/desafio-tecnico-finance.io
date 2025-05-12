import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import StyledRootLayout from "@/@config/styles/styled-root-layout";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance.IO - Melhor sistema para gerenciamento de finanças",
  description:
    "Seja bem-vindo(a) ao melhor sistema de gerenciamento das suas finanças pessoais e empresariais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <StyledRootLayout>{children}</StyledRootLayout>
      </body>
    </html>
  );
}
