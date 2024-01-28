import PageLayout from "@/components/PageLayout";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  return (
    <PageLayout>
      <p className="max-w-[460px]">Page Not Found</p>
    </PageLayout>
  );
}
