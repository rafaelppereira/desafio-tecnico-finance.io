import styled from "styled-components";

export const UsedPlanWidgetContainer = styled.div`
  gap: 1rem;
  display: flex;
  border-radius: 1rem;
  padding: 1rem;
  flex-direction: column;
  background-color: hsl(var(--primary) / 0.1);
`

export const UsedPlanWidgetTitleContainer = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.875rem;
  flex-direction: column;

  > span {
    color: hsl(var(--primary));
  }

  > p {
    margin-top: 0.25rem;
    color: hsl(var(--muted-foreground) / 0.8);
  }
`

export const UsedPlanWidgetProgressBar = styled.div`
  height: 0.7rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: hsl(var(--primary) / 0.1);

  > div {
    width: 80%;
    height: 100%;
    background-color: hsl(var(--primary));
  }
`