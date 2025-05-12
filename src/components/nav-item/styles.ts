import Link from "next/link";
import styled from "styled-components";

interface NavLinkContainerProps {
  $isActive?: boolean;
}

export const NavLinkContainer = styled(Link)<NavLinkContainerProps>`
  gap: 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.25ren;
  justify-content: space-between;

  white-space: nowrap;

  transition: all 0.2s;
  padding: 0.5rem 0.75rem;
  color: ${({ $isActive }) =>
    $isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"};

  border-radius: 0.25rem;
  font-weight: 500;

  background-color: ${({ $isActive }) =>
    $isActive ? "hsl(var(--primary) / 0.1)" : "transparent"};

  > div {
    gap: 0.75rem;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: hsl(var(--primary));
    background-color: hsl(var(--primary) / 0.1);
  }
`;

export const NavLinkShortly = styled.span`
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;

  color: white;
  font-size: 0.75rem;

  background-color: rgb(217 119 6);
`;
