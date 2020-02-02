import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';
import {useFeedbackMachineNavigation} from './feedbackMachineHook';

export const Thanks: NavigationStackScreenComponent = ({navigation}) => {
  const {navigate} = useFeedbackMachineNavigation(navigation);
  return (
    <Screen title="Thanks!" testID="thanks">
      <Button onPress={() => navigate({type: 'CLICK_HOME'})}>HOME</Button>
    </Screen>
  );
};
