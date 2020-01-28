import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const FeedbackQuestion: NavigationStackScreenComponent = ({
  navigation,
}) => (
  <Screen showBack onBack={() => navigation.goBack()}>
    <Button
      onPress={() => {
        navigation.navigate('Thanks');
      }}>
      GOOD
    </Button>
    <Button
      onPress={() => {
        navigation.navigate('FeedbackForm');
      }}>
      BAD
    </Button>
  </Screen>
);
