/* eslint-disable @typescript-eslint/no-explicit-any */
import { TransactionContext } from "@/contexts/TransactionContext";
import { useContext,  } from "react";

export function useTransaction() {
  const value: any = useContext(TransactionContext)
  return value
}
