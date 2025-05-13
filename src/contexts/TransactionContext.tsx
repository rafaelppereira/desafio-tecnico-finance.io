 
"use client";

import { TransactionsProps } from "@/features/dashboard/metrics/types";
import {
  formatMonthlyTransactions,
  MonthlyDataProps,
} from "@/features/dashboard/metrics/utils";
import { createContext, ReactNode, useEffect, useState } from "react";

export const TransactionContext = createContext({});

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [monthlyData, setMonthlyData] = useState<MonthlyDataProps[]>([]);
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [transactionsBackup, setTransactionsBackup] = useState<
    TransactionsProps[]
  >([]);
  const [isLoadingTransactionsInfo, setIsLoadingTransactionsInfo] =
    useState(true);

  const [summary, setSummary] = useState({
    income: 0,
    pending: 0,
    balance: 0,
    expenses: 0,
  });

  const getTransactionsFiltered = (transactionsFiltered: TransactionsProps[]) => {
    const income = transactionsFiltered
      .filter((t) => t.transaction_type === "deposit")
      .reduce((acc, t) => acc + parseInt(t.amount), 0);

    const expenses = transactionsFiltered
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
  };

  const getAllTransactionsInfo = async () => {
    const response = await fetch("/api/transactions");
    const transactionsResponse: TransactionsProps[] = await response.json();
    const income = transactionsResponse
      .filter((t) => t.transaction_type === "deposit")
      .reduce((acc, t) => acc + parseInt(t.amount), 0);

    const expenses = transactionsResponse
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

    setTransactions(transactionsResponse);
    setTransactionsBackup(transactionsResponse);
  };

  const accountTypes = Array.from(
    new Set(transactionsBackup.map((t) => t.account))
  ).map((account) => ({
    label: account,
    value: account,
  }));

  const industryTypes = Array.from(
    new Set(transactionsBackup.map((t) => t.industry))
  ).map((industry) => ({
    label: industry,
    value: industry,
  }));

  const stateTypes = Array.from(
    new Set(transactionsBackup.map((t) => t.state))
  ).map((state) => ({
    label: state,
    value: state,
  }));

  useEffect(() => {
    getAllTransactionsInfo();
  }, []);

  useEffect(() => {
    const transactionsFormatted = formatMonthlyTransactions({ transactions });
    setMonthlyData(transactionsFormatted);
  }, [transactions]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingTransactionsInfo(false);
    }, 2000);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        summary,
        stateTypes,
        monthlyData,
        transactions,
        accountTypes,
        industryTypes,
        setTransactions,
        transactionsBackup,
        getAllTransactionsInfo,
        getTransactionsFiltered,
        isLoadingTransactionsInfo,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
