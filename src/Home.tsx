import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

export const Home: NavigationStackScreenComponent = ({navigation}) => (
  <Screen title="Home">
    <Button
      disabled={false}
      onPress={() => {
        navigation.navigate('FeedbackQuestion');
      }}>
      FEEDBACK
    </Button>
    )
  </Screen>
);
