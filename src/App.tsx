import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark} from '@eva-design/eva';
import {AppNavigator} from './navigation';

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider mapping={mapping} theme={dark}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
