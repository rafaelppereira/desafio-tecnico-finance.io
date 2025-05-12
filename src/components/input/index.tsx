import { ComponentProps, useState } from "react";
import { InputContainer, InputLabel } from "./styles";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FormErrorMessage } from "../form-error-message";

interface InputProps extends ComponentProps<"input"> {
  name: string
  label?: string;
  className?: string
}

export function Input({ label, className, ...props }: InputProps) {
  const [inputType, setInputType] = useState("password");

  const handleToggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <InputContainer>
      {label && (
        <InputLabel>{label}</InputLabel>
      )}

      <div>
        <input
          {...props}
          className={className}
          type={props.type !== "password" ? props.type : inputType}
        />

        {props.type === "password" && (
          <button type="button" onClick={handleToggleInputType}>
            {inputType === "password" ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>

      <FormErrorMessage name={props.name} />
    </InputContainer>
  );
}
