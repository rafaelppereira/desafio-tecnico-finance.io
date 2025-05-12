"use client";

import { PageTitle } from "@/components/page-title";
import { MetricsFinancialSummaryCard } from "@/features/dashboard/metrics/components/metrics-financial-summary-card";
import { MetricsLineChart } from "@/features/dashboard/metrics/components/metrics-line-chart";
import { MetricsStackedBarChart } from "@/features/dashboard/metrics/components/metrics-stacked-bar-chart";
import {
  MetricsPageChartsContainer,
  MetricsPageSummaryCardContainer,
} from "@/features/dashboard/metrics/styles";
import { useTransaction } from "@/hooks/useTransaction";

import { motion } from "framer-motion";

export default function Home() {
  const { summary } = useTransaction();

  return (
    <div>
      <PageTitle
        title="Métricas"
        iconName="HandshakeIcon"
        description="Exibe em tempo real as métricas da sua empresa da parte financeira e de gestão."
      />

      <>
        <MetricsPageSummaryCardContainer>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MetricsFinancialSummaryCard
              value={summary.income}
              title="Receitas totais"
              iconName="TrendingUpIcon"
            />
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MetricsFinancialSummaryCard
              variant="negative"
              title="Despesas totais"
              value={summary.expenses}
              iconName="TrendingDownIcon"
            />
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <MetricsFinancialSummaryCard
              variant="pending"
              value={summary.pending}
              iconName="RefreshCcwIcon"
              title="Transações pendentes"
            />
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            style={{ gridColumn: "span 3 / span 3" }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <MetricsFinancialSummaryCard
              col={3}
              title="Saldo total"
              iconName="DollarSign"
              value={summary.balance}
            />
          </motion.div>
        </MetricsPageSummaryCardContainer>

        <MetricsPageChartsContainer>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            style={{ gridColumn: "span 3 / span 3" }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <MetricsLineChart />
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            style={{ gridColumn: "span 3 / span 3" }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <MetricsStackedBarChart />
          </motion.div>
        </MetricsPageChartsContainer>
      </>
    </div>
  );
}
