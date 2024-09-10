"use client";

// 1. import `NextUIProvider` component
import { FooterProvider } from "@/context/is-footer";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { ReactNode } from "react";

interface NextUIProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: NextUIProviderProps) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <SessionProvider>
      <FooterProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </FooterProvider>
    </SessionProvider>
  );
}
