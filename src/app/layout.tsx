import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import "@/styles/global.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "캠핑 플래너",
  description: "캠핑장을 고르고 캠핑 계획을 세우는 화면",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
