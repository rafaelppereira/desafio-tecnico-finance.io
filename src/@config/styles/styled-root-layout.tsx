'use client'

import StyledComponentsRegistry from "@/lib/registry-styled-components";
import { GlobalStyle } from "./globals";

export default function StyledRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  )
}