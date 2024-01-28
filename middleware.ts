import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["zh-TW", "en-US"],
  defaultLocale: "zh-TW",
});

export const config = {
  matcher: ["/", "/(zh-TW|en-US)/:path*", "/((?!_next|.*\\..*).*)"],
};
