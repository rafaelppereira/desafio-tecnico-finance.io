/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "@/components/select";
import {
  MetricsFiltersContainer,
  MetricsFiltersContent,
  MetricsFiltersContentDateRange,
  MetricsFiltersSubmitContainer,
  MetricsFilterTitleContainer,
} from "./styles";
import { Input } from "@/components/input";
import { FilterIcon, XIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { metricsFiltersSchema, MetricsFiltersSchemaProps } from "../../schemas";
import { useTransaction } from "@/hooks/useTransaction";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function MetricsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const {
    stateTypes,
    transactions,
    accountTypes,
    industryTypes,
    setTransactions,
    transactionsBackup
  } = useTransaction();

  const form = useForm<MetricsFiltersSchemaProps>({
    resolver: zodResolver(metricsFiltersSchema),
  });

  const onSubmit = (data: MetricsFiltersSchemaProps) => {
    const params = new URLSearchParams();

    if (data.account) params.set("account", data.account);
    if (data.industry) params.set("industry", data.industry);
    if (data.state) params.set("state", data.state);

    router.push(`${pathname}?${params.toString()}`);

    const filter = transactions.filter(
      (t: any) =>
        t.account === data.account ||
        t.industry === data.industry ||
        t.state === data.state
    );
    setTransactions(filter);
  };

  const handleResetFilters = () => {
    form.reset();
    router.push(pathname);
    setTransactions(transactionsBackup)
  };

  useEffect(() => {
    const state = searchParams.get("state");
    const endDate = searchParams.get("endDate");
    const account = searchParams.get("account");
    const industry = searchParams.get("industry");
    const startDate = searchParams.get("startDate");

    console.log({
      state,
      endDate,
      account,
      industry,
      startDate,
    });

    form.setValue("state", state ?? "");
    form.setValue("endDate", endDate ?? "");
    form.setValue("account", account ?? "");
    form.setValue("industry", industry ?? "");
    form.setValue("startDate", startDate ?? "");
  }, [form, searchParams]);

  return (
    <FormProvider {...form}>
      <MetricsFiltersContainer onSubmit={form.handleSubmit(onSubmit)}>
        <MetricsFilterTitleContainer>
          <h2>Filtros</h2>
        </MetricsFilterTitleContainer>

        <MetricsFiltersContentDateRange>
          <Input placeholder="Data inicial" {...form.register("startDate")} />
          <Input placeholder="Data final" {...form.register("endDate")} />
        </MetricsFiltersContentDateRange>

        <MetricsFiltersContent>
          <Select
            placeholder="Conta"
            options={accountTypes}
            {...form.register("account")}
          />
          <Select
            placeholder="Industria"
            options={industryTypes}
            {...form.register("industry")}
          />
          <Select
            placeholder="Estado"
            options={stateTypes}
            {...form.register("state")}
          />
        </MetricsFiltersContent>

        <MetricsFiltersSubmitContainer>
          <button type="button" onClick={handleResetFilters}>
            <XIcon /> Limpar
          </button>
          <button type="submit">
            <FilterIcon /> Aplicar filtros
          </button>
        </MetricsFiltersSubmitContainer>
      </MetricsFiltersContainer>
    </FormProvider>
  );
}
