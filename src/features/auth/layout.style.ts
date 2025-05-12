import { CopyrightIcon } from "lucide-react";
import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: repeat(9, minmax(0, 1fr));
`;

export const AuthLayoutHero = styled.div`
  grid-column: span 4 / span 4;
  padding: 1.75rem;
  display: none;

  > div {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 1.5rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/auth.jpg");
  }

  @media (min-width: 1024px) {
    display: block
  }

  @media (min-width: 1280px) {
    grid-column: span 5 / span 5;
  }
`;

export const AuthLayoutHeaderContainer = styled.div`
  gap: 2.5rem;
  height: 100vh;
  display: flex;
  padding: 1.75rem;
  overflow-y: auto;
  flex-direction: column;
  grid-column: span 9 / span 9;
  justify-content: space-between;
  border-left: 2px solid hsl(var(--border));

  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
  }

  @media (min-width: 1280px) {
    grid-column: span 4 / span 4;
  }
`;

export const AuthLayoutHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    gap: 1rem;
    display: flex;
    align-items: center;

    > span {
      font-size: 0.875rem;
      color: hsl(var(--text-muted-foreground));

      @media (max-width: 1320px) {
        display: none;
      }
    }

    > a {
      font-weight: 600;
      font-size: 0.85rem;
      align-items: center;
      display: inline-flex;
      border-radius: 0.75rem;
      justify-content: center;
      border: 1px solid hsl(var(--input));
      color: hsl(var(--secondary-foreground));
      height: 2.5rem;
      padding: 0 0.75rem;
    }
  }
`;

export const AuthLayoutFooterCopyrightIcon = styled(CopyrightIcon)`
  top: 1px;
  width: 1rem;
  height: 1rem;
  position: relative;
  margin-right: 0.25rem;
`;

export const AuthLayoutFooter = styled.footer`
  display: flex;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
  }

  strong {
    margin: 0 3px;
    opacity: 0.6;
  }

  a {
    color: hsl(var(--primary));
  }

  @media (max-width: 1160px) {
    a,
    strong {
      display: none;
    }
  }
`;
