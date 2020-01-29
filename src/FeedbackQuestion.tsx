import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const FeedbackQuestion: NavigationStackScreenComponent = ({
  navigation,
}) => (
  <Screen
    showBack={true}
    onBack={() => navigation.goBack()}
    title="How was your experience?">
    <Button
      style={{marginBottom: 50}}
      onPress={() => {
        navigation.navigate('Thanks');
      }}>
      GOOD
    </Button>
    <Button
      status="danger"
      onPress={() => {
        navigation.navigate('FeedbackForm');
      }}>
      BAD
    </Button>
  </Screen>
);
