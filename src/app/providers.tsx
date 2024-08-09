"use client";

import * as React from "react";
import { ReactNode } from "react";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { FooterProvider } from "@/context/is-footer";

interface NextUIProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: NextUIProviderProps) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <FooterProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </FooterProvider>
  );
}
