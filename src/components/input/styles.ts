import styled from "styled-components";

export const InputContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    position: relative;

    > button {
      top: 50%;
      right: 0.5rem;
      cursor: pointer;
      position: absolute;
      transform: translateY(-50%);

      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.5rem;
      height: 2.5rem;

      border-radius: 0.75rem;
      color: hsl(var(--card-secondary));
      background-color: hsl(var(--card));
      border: 1px solid hsl(var(--input));

      > svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  input {
    width: 100%;
    display: flex;
    outline: none;
    height: 3.5rem;
    font-size: 1rem;
    border-radius: 0.75rem;
    padding: 0.5rem 0.75rem;
    color: hsl(var(--foreground));
    border: 3px solid hsl(var(--input));
    background-color: hsl(var(--secondary));

    transition: all 0.2s;

    &::placeholder {
      color: hsl(var(--muted-foreground));
    }

    &:focus {
      border-color: hsl(var(--primary));
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
      background: transparent;
      filter: invert(1); /* deixa branco no modo escuro */
      cursor: pointer;
    }

    &[type="date"]::-webkit-inner-spin-button,
    &[type="date"]::-webkit-clear-button {
      display: none;
    }

    &[type="date"]::-moz-focus-inner {
      border: 0;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;
