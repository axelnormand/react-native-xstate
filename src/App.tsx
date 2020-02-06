import React from 'react';
import {AppNavigator} from './navigation';
import {AppWrapper} from './AppWrapper';

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <AppNavigator />
    </AppWrapper>
  );
};
