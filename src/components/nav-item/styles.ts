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

export const SidebarAccountMenuContainer = styled.div`
  gap: 0.75rem;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr max-content;

  > img {
    border-radius: 9999px;
    border: 2px solid hsl(var(--primary));
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 0.75rem;
    color: hsl(var(--card-secondary));
    background-color: hsl(var(--card));
    border: 1px solid hsl(var(--input));

    > svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const SidebarAccountMenuContent = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  text-overflow: ellipsis;

  > h2 {
    font-weight: 600;
    font-size: 0.875rem;
  }

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 0.875rem;
    color: rgb(244 244 255);
  }
`;
