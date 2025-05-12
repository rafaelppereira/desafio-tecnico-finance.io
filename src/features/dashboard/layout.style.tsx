import styled from "styled-components";

export const DashboardLayoutContainer = styled.main`
  min-height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/dashboard.png');

  @media(min-width: 1024px) {
    display: grid;
    grid-template-columns: 18rem /* 288px */ 1fr;
  }
`

export const DashboardLayoutContent = styled.div`
  max-width: 100vw;
  padding: 1rem;
  
  @media(min-width: 1024px) {
    padding: 1.3rem;
    grid-column-start: 2;
  }
`