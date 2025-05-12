"use client";

import { DollarSign, RefreshCcwIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { FinancialSummaryCardContainer, Variant } from "./styles";
import CountUp from "react-countup";

interface FinancialSummaryCardProps {
  col?: number;
  title: string;
  value: number;
  variant?: Variant
  iconName: keyof typeof icons;
}

const icons = {
  DollarSign,
  TrendingUpIcon,
  RefreshCcwIcon,
  TrendingDownIcon,
}

export function MetricsFinancialSummaryCard({
  title,
  value,
  col = 1,
  iconName,
  variant = 'default',
}: FinancialSummaryCardProps) {
  const Icon = icons[iconName]

  return (
    <FinancialSummaryCardContainer $variant={variant} $col={col}>
      <div>
        <Icon />
        <CountUp
          end={value}
          duration={3}
          formattingFn={(val) =>
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(val)
          }
        />
      </div>

      <h2>{title}</h2>
    </FinancialSummaryCardContainer>
  );
}
