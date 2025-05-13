"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  MetricsStackedBarChartContainer,
  MetricsStackedBarChartTitle,
  MetricsStackedBarLoader,
} from "./styles";
import { useTransaction } from "@/hooks/useTransaction";
import { MetricsTooltipChart } from "../metrics-tooltip-chart";

export function MetricsStackedBarChart() {
  const { monthlyData, isLoadingTransactionsInfo } = useTransaction();

  return (
    <MetricsStackedBarChartContainer>
      <MetricsStackedBarChartTitle>
        <div>
          {isLoadingTransactionsInfo && <MetricsStackedBarLoader />}
          <h2>Total de receitas e despesas por mês</h2>
        </div>
        <p>Visualize o total de receitas e despesas por mês.</p>
      </MetricsStackedBarChartTitle>

      <div style={{ width: "100%", height: "18rem" }}>
        <ResponsiveContainer>
          <BarChart
            data={monthlyData}
            margin={{ top: 16, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <Tooltip content={<MetricsTooltipChart type="bar" />} />
            <XAxis dataKey="month" tick={{ dy: 20 }} height={50} />
            <YAxis
              width={120}
              tick={{ dx: -8 }}
              tickFormatter={(value) => {
                return value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                });
              }}
            />
            <Bar
              dataKey="income"
              stackId="a"
              name="Receita"
              fill="hsl(var(--primary))"
            />
            <Bar
              dataKey="expense"
              stackId="a"
              name="Despesa"
              fill="rgba(239, 68, 68, 0.5)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </MetricsStackedBarChartContainer>
  );
}
