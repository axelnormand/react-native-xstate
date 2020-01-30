import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const Thanks: NavigationStackScreenComponent = ({navigation}) => (
  <Screen title="Thanks">
    <Button
      onPress={() => {
        navigation.navigate('Home');
      }}>
      THANKS!
    </Button>
  </Screen>
);
