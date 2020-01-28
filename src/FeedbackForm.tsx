import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const FeedbackForm: NavigationStackScreenComponent = ({navigation}) => (
  <Screen>
    <Button
      onPress={() => {
        navigation.navigate('Thanks');
      }}>
      FORM
    </Button>
  </Screen>
);
