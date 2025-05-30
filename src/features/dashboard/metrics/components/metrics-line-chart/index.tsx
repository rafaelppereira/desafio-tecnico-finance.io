"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  MetricsLineChartContainer,
  MetricsLineChartTitle,
  MetricsLineLoader,
} from "./styles";
import { useTransaction } from "@/hooks/useTransaction";
import { MetricsTooltipChart } from "../metrics-tooltip-chart";

export function MetricsLineChart() {
  const { monthlyData, isLoadingTransactionsInfo } = useTransaction();

  return (
    <MetricsLineChartContainer>
      <MetricsLineChartTitle>
        <div>
          {isLoadingTransactionsInfo && <MetricsLineLoader />}
          <h2>Saldo acumulado ao longo do tempo</h2>
        </div>
        <p>Visualize por mês o saldo acumulado ao longo do tempo.</p>
      </MetricsLineChartTitle>

      <div
        style={{
          width: "100%",
          height: "18rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {monthlyData && monthlyData.length > 0 ? (
          <ResponsiveContainer>
            <LineChart
              data={monthlyData}
              margin={{ top: 16, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <Tooltip content={<MetricsTooltipChart type="line" />} />
              <XAxis dataKey="month" tick={{ dy: 20 }} height={50} />
              <YAxis
                width={100}
                tick={{ dx: -8 }}
                tickFormatter={(value) => {
                  return value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                  });
                }}
              />
              <Line
                dot={{ r: 4 }}
                type="monotone"
                strokeWidth={2}
                dataKey="balance"
                activeDot={{ r: 6 }}
                name="Saldo acumulado"
                stroke="hsl(var(--primary))"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <span>Sem dados para visualizar</span>
        )}
      </div>
    </MetricsLineChartContainer>
  );
}
