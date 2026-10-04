import { Locale } from "next-intl";

export { cn } from "cn"


export function getDirection(locale: Locale): "ltr" | "rtl" {
  switch (locale) {
    case "fa":
    case "ps":
      return "rtl";

    case "en":
    default:
      return "ltr";
  }
}