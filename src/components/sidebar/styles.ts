import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 20;
  display: none;

  width: 18rem;
  overflow-y: auto;
  padding: 1.25rem;
  background-color: hsl(var(--background));
  border-right: 2px solid hsl(var(--border));

  gap: 1.5rem;

  @media(min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

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
`

export const SidebarContentSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgb(63 63 70);
`

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
`

export const SidebarFooterContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  margin-top: auto;
  flex-direction: column;
`