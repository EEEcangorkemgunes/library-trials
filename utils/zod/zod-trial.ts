import { z } from "zod";

export const x = z.object({
  name: z.string(),
  age: z.number(),
  frequency: z.number().min(0).max(6),
});
