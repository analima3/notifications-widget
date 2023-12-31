import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notification Widget",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={false}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
