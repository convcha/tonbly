import { format, parseISO } from "date-fns";

export const formatISODateStringToYYYYMMDD = (value: string) => {
  return format(parseISO(value), "yyyy年MM月dd");
};

export const formatISODateStringToYYYYMMDDHHMM = (value: string) => {
  return format(parseISO(value), "yyyy年MM月dd HH:mm");
};
