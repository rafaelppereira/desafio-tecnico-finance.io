import { z } from "zod";

export const metricsFiltersSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  account: z.string().optional(),
  industry: z.string().optional(),
  state: z.string().optional(),
})

export type MetricsFiltersSchemaProps = z.infer<typeof metricsFiltersSchema>