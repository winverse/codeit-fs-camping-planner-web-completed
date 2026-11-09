"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface NoticeContextValue {
  notice: string | null;
  showNotice: (message: string) => void;
}

const NoticeContext = createContext<NoticeContextValue | null>(null);

export function useNotice() {
  const context = useContext(NoticeContext);

  if (!context) {
    throw new Error("useNotice는 NoticeProvider 안에서만 쓸 수 있습니다.");
  }

  return context;
}

interface NoticeProviderProps {
  children: ReactNode;
}

export function NoticeProvider({ children }: NoticeProviderProps) {
  const [notice, setNotice] = useState<string | null>(null);

  function showNotice(message: string) {
    setNotice(message);
    setTimeout(() => setNotice(null), 3000);
  }

  const value = { notice, showNotice };

  return (
    <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>
  );
}
