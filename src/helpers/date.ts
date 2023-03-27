import { Locale } from "date-fns";
import { es } from "date-fns/locale";

export const TODAY: Date = new Date();
export const YEAR: number = new Date().getFullYear();

export const getNameMonths = (Locale: Locale = es) => {
  let _months: string[] = [];
  for (let i = 0; i < 12; i++) {
    _months.push(Locale.localize?.month(i, { width: "long" }));
  }
  return _months;
};

export const getMonthNumberFromName = (month: String) => {
  return new Date(`${month},${YEAR}`).getMonth() + 1;
};

export const lastDayOfMonth = (month: String): number => {
  return new Date(YEAR, getMonthNumberFromName(month), 0).getDate();
};
