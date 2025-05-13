/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from "react";

export function MetricsFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoadedFilters, setIsLoadedFilters] = useState(false);

  const {
    stateTypes,
    accountTypes,
    transactions,
    industryTypes,
    setTransactions,
    transactionsBackup,
    getAllTransactionsInfo,
    getTransactionsFiltered,
  } = useTransaction();

  const form = useForm<MetricsFiltersSchemaProps>({
    resolver: zodResolver(metricsFiltersSchema),
  });

  const onSubmit = async (data: MetricsFiltersSchemaProps) => {
    const params = new URLSearchParams();

    if (data.startDate) params.set("startDate", data.startDate);
    if (data.endDate) params.set("endDate", data.endDate);
    if (data.account) params.set("account", data.account);
    if (data.industry) params.set("industry", data.industry);
    if (data.state) params.set("state", data.state);

    router.push(`${pathname}?${params.toString()}`);

    const start = data.startDate ? new Date(data.startDate).getTime() : null;
    const end = data.endDate ? new Date(data.endDate).getTime() : null;

    const filter = transactionsBackup.filter((t: any) => {
      const matchAccount = !data.account || t.account === data.account;
      const matchIndustry = !data.industry || t.industry === data.industry;
      const matchState = !data.state || t.state === data.state;
      const matchDate = (!start || t.date >= start) && (!end || t.date <= end);

      return matchAccount && matchIndustry && matchState && matchDate;
    });

    setTransactions(filter);
    getTransactionsFiltered(filter);
  };

  const handleResetFilters = async () => {
    form.reset();               
    router.push(pathname);      
    await getAllTransactionsInfo();
  };

  useEffect(() => {
    if (!industryTypes || !accountTypes || !stateTypes) return;

    const state = searchParams.get("state");
    const endDate = searchParams.get("endDate");
    const account = searchParams.get("account");
    const industry = searchParams.get("industry");
    const startDate = searchParams.get("startDate");

    form.setValue("state", state ?? "");
    form.setValue("endDate", endDate ?? "");
    form.setValue("account", account ?? "");
    form.setValue("industry", industry ?? "");
    form.setValue("startDate", startDate ?? "");

    setIsLoadedFilters(true);
  }, [industryTypes, accountTypes, stateTypes, searchParams, form]);

  useEffect(() => {
    if (!transactions && !transactionsBackup) return;

    const formValues = form.getValues()

    const start = formValues.startDate ? new Date(formValues.startDate).getTime() : null;
    const end = formValues.endDate ? new Date(formValues.endDate).getTime() : null;

    const filter = transactionsBackup.filter((t: any) => {
      const matchAccount = !formValues.account || t.account === formValues.account;
      const matchIndustry = !formValues.industry || t.industry === formValues.industry;
      const matchState = !formValues.state || t.state === formValues.state;
      const matchDate = (!start || t.date >= start) && (!end || t.date <= end);

      return matchAccount && matchIndustry && matchState && matchDate;
    });

    setTransactions(filter);
    getTransactionsFiltered(filter);
  }, [isLoadedFilters, transactionsBackup]);

  return (
    <FormProvider {...form}>
      <MetricsFiltersContainer onSubmit={form.handleSubmit(onSubmit)}>
        <MetricsFilterTitleContainer>
          <h2>Filtros</h2>
        </MetricsFilterTitleContainer>

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

        <MetricsFiltersContentDateRange>
          <Input
            label="Data inicial"
            type="date"
            placeholder="Data inicial"
            {...form.register("startDate")}
          />
          <Input
            label="Data final"
            type="date"
            placeholder="Data final"
            {...form.register("endDate")}
          />
        </MetricsFiltersContentDateRange>

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
