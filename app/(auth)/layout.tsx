import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export const metadata = {
  title: "Threads",
  descreiption: "Threads Clone Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
