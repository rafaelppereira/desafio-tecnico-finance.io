import { ComponentProps } from "react";
import { SelectContainer } from "./styles";
import { ChevronDownIcon } from "lucide-react";

interface SelectProps extends ComponentProps<"select"> {
  placeholder?: string;
  options: { label: string; value: string }[];
}

export function Select({
  options,
  placeholder = "Selecione uma opção",
  ...props
}: SelectProps) {
  return (
    <SelectContainer>   
      <select {...props}>
        <option value="">{placeholder}</option>
        {options.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </SelectContainer>
  );
}
