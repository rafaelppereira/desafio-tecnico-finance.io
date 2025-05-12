import styled from "styled-components";

interface SidebarContainerProps {
  $hasToggleSidebar: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 20;

  transition: all 0.3s;

  overflow-y: auto;
  padding: 1.25rem;
  width: 18rem;

  display: flex;
  flex-direction: column;
  background-color: hsl(var(--background));
  border-right: 2px solid hsl(var(--border));

  gap: 1.5rem;

  @media (max-width: 1024px) {
    white-space: nowrap;

    opacity: ${({ $hasToggleSidebar }) => ($hasToggleSidebar ? "1" : "0")};
    width: ${({ $hasToggleSidebar }) => ($hasToggleSidebar ? "18rem" : "0")};
    visibility: ${({ $hasToggleSidebar }) =>
      $hasToggleSidebar ? "visible" : "hidden"};
  }
`;

export const SidebarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
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

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const SidebarContent = styled.div`
  gap: 1.5rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    gap: 0.125rem;
    flex-direction: column;
  }
`;

export const SidebarContentSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgb(63 63 70);
`;

export const SidebarInputSearchContainer = styled.div`
  position: relative;

  > input {
    height: 3rem;

    width: 100%;
    display: flex;
    outline: none;
    font-size: 1rem;
    border-radius: 0.75rem;
    padding: 0.5rem 0.75rem 0.5rem 2.75rem;
    color: hsl(var(--foreground));
    border: 3px solid hsl(var(--input));
    background-color: hsl(var(--secondary));

    transition: all 0.2s;

    &::placeholder {
      color: hsl(var(--muted-foreground));
    }

    &:focus {
      border-color: hsl(var(--primary));
    }
  }

  > svg {
    left: 1rem;
    width: 1rem;
    height: 1rem;
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
  }
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

export const SidebarFooterContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  margin-top: auto;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 10;
  height: 4.5rem;
  position: fixed;
  background-color: hsl(var(--background));
  border-bottom: 2px solid hsl(var(--border));

  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;

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

  > img {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
