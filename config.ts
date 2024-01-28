import { Pathnames } from "next-intl/navigation";

export const locales = ["zh-TW", "en-US"];

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;