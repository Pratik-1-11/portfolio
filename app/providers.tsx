'use client';

import React, { ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchParamProviderProps {
  children: ReactNode;
}

function SearchParamProvider({ children }: SearchParamProviderProps) {
  // This component will handle the useSearchParams hook
  useSearchParams();
  return <>{children}</>;
}

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamProvider>{children}</SearchParamProvider>
    </Suspense>
  );
}
