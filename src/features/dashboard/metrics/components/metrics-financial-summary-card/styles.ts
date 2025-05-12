import styled, { css } from "styled-components";

export type Variant = "default" | "negative" | "pending";

interface FinancialSummaryCardContainer {
  $col?: number
  $variant?: Variant;
}

export const FinancialSummaryCardContainer = styled.div<FinancialSummaryCardContainer>`
  padding: 1.5rem 1.2rem;
  border-radius: 0.75rem;

  backdrop-filter: blur(30px);
  background-color: hsl(var(--background));

  grid-column: span ${({ $col }) => $col} / span ${({ $col }) => $col};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > svg {
      width: 1.2rem;
      height: 1.2rem;
      ${({ $variant }) => {
        switch ($variant) {
          case "negative":
            return css`
              color: rgba(239, 68, 68, 1);
            `; // vermelho
          case "pending":
            return css`
              color: rgba(250, 204, 21, 1);
            `; // amarelo
          default:
            return css`
              color: rgba(34, 197, 94, 1);
            `; // verde
        }
      }}
    }

    > span {
      font-weight: 700;
      font-size: 1.3rem;
      ${({ $variant }) => {
        switch ($variant) {
          case "negative":
            return css`
              color: rgba(239, 68, 68, 1);
            `; // vermelho
          case "pending":
            return css`
              color: rgba(250, 204, 21, 1);
            `; // amarelo
          default:
            return css`
              color: rgba(34, 197, 94, 1);
            `; // verde
        }
      }}
    }
  }

  > h2 {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.2rem;
    color: hsl(var(--muted-foreground));
  }

  @media (max-width: 1200px) {
    grid-column: span 1 / span 1
  }
`;
