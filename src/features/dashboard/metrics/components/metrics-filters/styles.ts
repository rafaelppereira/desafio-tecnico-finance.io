import styled from "styled-components";

export const MetricsFiltersContainer = styled.form`
  gap: 0.5rem;
  display: flex;
  margin: 1rem 0;
  flex-direction: column;

  background-color: hsl(var(--background));
  padding: 1rem;
  border-radius: 0.85rem;
  backdrop-filter: blur(20px);
`;

export const MetricsFilterTitleContainer = styled.div`
  padding: 0 0.2rem;

  > h2 {
    font-size: 0.85rem;
  }
`;

export const MetricsFiltersContentDateRange = styled.div`
  margin-bottom: 0.6rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const MetricsFiltersContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const MetricsFiltersSubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  
  margin-top: 0.6rem;

  gap: 0.5rem;


  > button {
    color: white;
    height: 2rem;
    cursor: pointer;
    font-weight: 600;
    padding: 0 0.75rem;
    font-size: 0.85rem;
    align-items: center;
    display: inline-flex;
    border-radius: 0.75rem;
    justify-content: center;
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--primary) / 0.6);

    &:first-child {
      background-color: rgba(239, 68, 68, 1);
    }

    > svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }
`