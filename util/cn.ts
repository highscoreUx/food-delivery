import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...classList: ClassValue[]) => {
  return twMerge(clsx(classList));
};
