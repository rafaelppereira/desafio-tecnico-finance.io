'use client'

import { PageTitle } from "@/components/page-title";
import { MetricsFinancialSummaryCard } from "@/features/dashboard/metrics/components/metrics-financial-summary-card";
import { MetricsLineChart } from "@/features/dashboard/metrics/components/metrics-line-chart";
import { MetricsStackedBarChart } from "@/features/dashboard/metrics/components/metrics-stacked-bar-chart";
import {
  MetricsPageChartsContainer,
  MetricsPageSummaryCardContainer,
} from "@/features/dashboard/metrics/styles";
import { useTransaction } from "@/hooks/useTransaction";
import Skeleton from "@/components/skeleton";

export default function Home() {
  const { summary, isLoadingTransactionsInfo } = useTransaction()

  return (
    <div>
      <PageTitle
        title="Métricas"
        iconName="HandshakeIcon"
        description="Exibe em tempo real as métricas da sua empresa da parte financeira e de gestão."
      />

      {isLoadingTransactionsInfo ? (
        <>
          <MetricsPageSummaryCardContainer>
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" col="3" />
          </MetricsPageSummaryCardContainer>

          <MetricsPageChartsContainer>
            <Skeleton width="100%" height="400px" col="3" />
            <Skeleton width="100%" height="400px" col="3" />
          </MetricsPageChartsContainer>
        </>
      ) : (
        <>
          <MetricsPageSummaryCardContainer>
            <MetricsFinancialSummaryCard
              value={summary.income}
              title="Receitas totais"
              iconName="TrendingUpIcon"
            />
            <MetricsFinancialSummaryCard
              variant="negative"
              title="Despesas totais"
              value={summary.expenses}
              iconName="TrendingDownIcon"
            />
            <MetricsFinancialSummaryCard
              variant="pending"
              value={summary.pending}
              iconName="RefreshCcwIcon"
              title="Transações pendentes"
            />
            <MetricsFinancialSummaryCard
              col={3}
              title="Saldo total"
              iconName="DollarSign"
              value={summary.balance}
            />
          </MetricsPageSummaryCardContainer>

          <MetricsPageChartsContainer>
            <MetricsLineChart />
            <MetricsStackedBarChart />
          </MetricsPageChartsContainer>
        </>
      )}
    </div>
  );
}
