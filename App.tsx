import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark} from '@eva-design/eva';
import {AppNavigator} from 'src/navigation';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={dark}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App;
