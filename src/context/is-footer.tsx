import { createContext, ReactNode, useContext, useState } from "react";

interface FooterProviderProps {
  children: ReactNode;
}

export interface FooterContextType {
  isFooter: boolean;
  setIsFooter: (newValue: boolean) => void;
}

const FooterContext = createContext<FooterContextType | null>(null);

export function FooterProvider({ children }: FooterProviderProps) {
  const [isFooter, setIsFooter] = useState(true);

  return <FooterContext.Provider value={{ isFooter, setIsFooter }}>{children}</FooterContext.Provider>;
}

export function useFooterContext() {
  return useContext(FooterContext);
}
