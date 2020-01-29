import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';

type Params = {submitted?: boolean};

export const Home: NavigationStackScreenComponent<Params> = ({navigation}) => (
  <Screen title="Home">
    {navigation.getParam('submitted') ? (
      <Button
        onPress={() => {
          navigation.navigate('FeedbackQuestion');
        }}>
        AGAIN
      </Button>
    ) : (
      <Button
        onPress={() => {
          navigation.navigate('FeedbackQuestion');
        }}>
        FEEDBACK
      </Button>
    )}
  </Screen>
);
