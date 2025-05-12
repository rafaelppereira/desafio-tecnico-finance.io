import { TransactionsProps } from "@/features/dashboard/metrics/types";
import {
  formatMonthlyTransactions,
  MonthlyDataProps,
} from "@/features/dashboard/metrics/utils";
import { useEffect, useState } from "react";

export function useTransaction() {
  const [monthlyData, setMonthlyData] = useState<MonthlyDataProps[]>([]);
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [isLoadingTransactionsInfo, setIsLoadingTransactionsInfo] = useState(true)

  const [summary, setSummary] = useState({
    income: 0,
    pending: 0,
    balance: 0,
    expenses: 0,
  });

  const getAllTransactionsInfo = async () => {
    const response = await fetch("/api/transactions");
    const transactions: TransactionsProps[] = await response.json();

    const income = transactions
      .filter((t) => t.transaction_type === "deposit")
      .reduce((acc, t) => acc + parseInt(t.amount), 0);

    const expenses = transactions
      .filter((t) => t.transaction_type === "withdraw")
      .reduce((acc, t) => acc + parseInt(t.amount), 0);

    const pending = 0;

    const balance = income - expenses;

    setSummary({
      income: income / 100,
      pending: pending / 100,
      balance: balance / 100,
      expenses: expenses / 100,
    });

    setTransactions(transactions);
  };

  useEffect(() => {
    getAllTransactionsInfo();
  }, []);

  useEffect(() => {
    const transactionsFormatted = formatMonthlyTransactions({ transactions });
    setMonthlyData(transactionsFormatted);
  }, [transactions]);

  // Função para gerar o loader fake do carregamento de dados
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingTransactionsInfo(false)
    }, 2000)
  }, [])

  return {
    summary,
    monthlyData,
    transactions,
    isLoadingTransactionsInfo,
  };
}
