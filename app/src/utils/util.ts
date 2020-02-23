import { format, parseISO } from "date-fns";
import { useLocation } from "react-router-dom";

export const formatISODateStringToYYYYMMDD = (value: string) => {
  return format(parseISO(value), "yyyy年MM月dd");
};

export const formatISODateStringToYYYYMMDDHHMM = (value: string) => {
  return format(parseISO(value), "yyyy年MM月dd HH:mm");
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
