/* eslint-disable @typescript-eslint/no-explicit-any */
import { TransactionsProps } from "./types";

export interface MonthlyDataProps {
  balance: number;
  expense: number;
  income: number;
  month: string;
}

interface MonthlyTransactionsMapProps {
  transactions: TransactionsProps[]
}

export const formatMonthlyTransactions = ({ transactions }: MonthlyTransactionsMapProps) => {
  const monthly: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = `${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}/${date.getFullYear()}`;
    const amount = parseInt(t.amount);

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.transaction_type === "deposit") {
      monthly[month].income += amount;
    } else {
      monthly[month].expense += amount;
    }
  });

  const sortedMonths: MonthlyDataProps[] = Object.entries(monthly)
    .sort((a: any, b: any) => {
      return (
        new Date("01/" + a[0]).getTime() - new Date("01/" + b[0]).getTime()
      );
    })
    .map(([month, { income, expense }], index, arr: any) => {
      const prevBalance = index === 0 ? 0 : arr[index - 1].balance;
      const balance = prevBalance + (income - expense);

      const result = {
        month,
        income: income / 100,
        expense: expense / 100,
        balance: balance / 100,
      };

      arr[index].balance = balance;
      return result;
    });

  return sortedMonths
};