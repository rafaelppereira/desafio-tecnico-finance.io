import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;

  > select {
    width: 100%;
    display: flex;
    outline: none;
    height: 3.5rem;
    font-size: 1rem;
    border-radius: 0.75rem;
    padding: 0.5rem 0.75rem;
    color: hsl(var(--foreground));
    border: 3px solid transparent;
    background-color: hsl(var(--secondary));

    transition: all 0.2s;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::placeholder {
      color: hsl(var(--muted-foreground));
    }

    &:focus {
      border-color: hsl(var(--primary));
    }
  }

  > svg {
    width: 1rem;
    height: 1rem;

    top: 50%;
    right: 12px;
    position: absolute;
    transform: translateY(-50%);
  }
`;
