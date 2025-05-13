import { Loader2Icon } from "lucide-react";
import styled, { keyframes } from "styled-components";

export const MetricsStackedBarChartContainer = styled.div`
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.75rem;
  background-color: hsl(var(--background));

  grid-column: span 1 / span 1;

  transition: all 0.2s;

  &:hover {
    scale: 0.98;
  }

  span {
    font-weight: 700;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;

    color: white;
    font-size: 0.75rem;

    background-color: rgb(217 119 6);
  }
`;

export const MetricsStackedBarChartTitle = styled.div`
  margin-bottom: 1.2rem;

  > div {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    > h2 {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  > p {
    font-size: 1rem;
    margin-top: 0.2rem;
    color: hsl(var(--muted-foreground));
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const MetricsStackedBarLoader = styled(Loader2Icon)`
  animation: ${spin} 1s linear infinite;
`;
