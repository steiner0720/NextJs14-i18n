"use client";

import { useEffect } from "react";

type ProvidersProps = { children: React.ReactNode };

function Providers({ children }: ProvidersProps) {
  useEffect(() => {}, []);

  return children;
}

export default Providers;
