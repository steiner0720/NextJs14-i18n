import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../config";
import Providers from "./providers";
import { NextIntlClientProvider, useMessages } from "next-intl";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale });
  return {
    title: `Next App - lang: ${t(locale)}`,
    description: "NextJs Starter",
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
