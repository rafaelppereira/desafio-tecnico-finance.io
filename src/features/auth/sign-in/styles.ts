import styled from "styled-components";

export const SignInPageForm = styled.form`
  gap: 1rem;
  display: flex;
  margin-top: 1.25rem;
  flex-direction: column;

  > button {
    color: white;
    height: 3.5rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    padding: 0 0.75rem;
    align-items: center;
    display: inline-flex;
    border-radius: 0.75rem;
    justify-content: center;
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--primary) / 0.6);
  }
`;

export const SignInPageForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: end;
  
  > a {
    font-size: 0.875rem;
    color: hsl(var(--primary));
    text-decoration: underline;
  }
`
