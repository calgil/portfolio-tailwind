import "./globals.css";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(fas);

const hind = Hind_Siliguri({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calvin Gilbert",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hind.className}>{children}</body>
    </html>
  );
}
