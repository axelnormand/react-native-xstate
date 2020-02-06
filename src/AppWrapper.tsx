import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark} from '@eva-design/eva';

type Props = {
  children: React.ReactNode;
};

export const AppWrapper: React.FC<Props> = ({children}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider mapping={mapping} theme={dark}>
        {children}
      </ApplicationProvider>
    </>
  );
};
