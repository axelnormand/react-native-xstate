import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const FeedbackQuestion: NavigationStackScreenComponent = ({
  navigation,
}) => (
  <Screen showBack={true} onBack={() => navigation.goBack()} title="Have fun?">
    <Button
      style={{marginBottom: 50}}
      onPress={() => {
        navigation.navigate('Thanks');
      }}>
      YES
    </Button>
    <Button
      status="danger"
      onPress={() => {
        navigation.navigate('FeedbackForm');
      }}>
      NO
    </Button>
  </Screen>
);
