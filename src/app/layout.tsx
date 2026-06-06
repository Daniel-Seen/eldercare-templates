import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareTemplates — 养老机构数字化模板",
  description: "专为养老行业打造的 Notion / Excel / Canva 模板。排班、健康档案、家属沟通、活动日历、药品管理 — 即买即用。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
