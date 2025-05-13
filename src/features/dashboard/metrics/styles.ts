import styled from "styled-components";

export const MetricsPageSummaryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const MetricsPageChartsContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  gap: 1rem;
`