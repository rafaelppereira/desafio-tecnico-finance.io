import { TooltipProps } from "recharts";
import { TooltipContainer } from "./styles";
import { convertNumberToCurrencyBRL } from "@/@config/utils/convert-number-to-currency-brl";

interface MetricsTooltipChartProps extends TooltipProps<number, string> {
  type: "bar" | "line";
}

export function MetricsTooltipChart({
  label,
  type,
  active,
  payload,
}: MetricsTooltipChartProps) {
  if (!active || !payload || !payload.length) return null;

  const balance = convertNumberToCurrencyBRL(payload[0].value ?? 0);
  const income = convertNumberToCurrencyBRL(payload[0].payload.income);
  const expense = convertNumberToCurrencyBRL(payload[0].payload.expense);

  return (
    <TooltipContainer>
      <p>
        <strong>{label}</strong>
      </p>

      {type === "line" && <p>Saldo: {balance}</p>}

      {type === "bar" && (
        <>
          <p>Receita: {income}</p>

          <p>Despesa: {expense}</p>
        </>
      )}
    </TooltipContainer>
  );
}
