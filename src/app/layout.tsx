import type { Metadata } from "next";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";

export const metadata: Metadata = {
  title: "캠핑 플래너",
  description: "캠핑장을 고르고 캠핑 계획을 세우는 화면",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
