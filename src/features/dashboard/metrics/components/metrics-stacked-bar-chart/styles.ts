import styled from "styled-components";

export const MetricsStackedBarChartContainer = styled.div`
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.75rem;
  background-color: hsl(var(--background));

  grid-column: span 1 / span 1;
`;

export const MetricsStackedBarChartTitle = styled.div`
  margin-bottom: 1.2rem;

  > h2 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  > p {
    font-size: 1rem;
    margin-top: 0.2rem;
    color: hsl(var(--muted-foreground));
  }
`;
