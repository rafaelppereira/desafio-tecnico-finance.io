import styled from "styled-components";

export const SignUpPageForm = styled.form`
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
    margin-top: 1rem;
    padding: 0 0.75rem;
    align-items: center;
    display: inline-flex;
    border-radius: 0.75rem;
    justify-content: center;
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--primary) / 0.6);
  }
`;