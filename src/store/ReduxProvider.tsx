'use client';

import { WithInitialData } from '@/components/WithInitialData';
import { persistor, store } from '@/store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WithInitialData>{children}</WithInitialData>
      </PersistGate>
    </Provider>
  );
}
