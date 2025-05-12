import styled from "styled-components";

export const PageTitleContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const PageTitleIconContainer = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background-color: hsl(var(--primary) / 0.1);
  border: 1px solid hsl(var(--border) / 0.5) > h2 {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  > svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const PageTitleDescription = styled.p`
  max-width: 24rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: hsl(var(--muted-foreground));
`;
