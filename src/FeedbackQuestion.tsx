import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {Screen} from './Screen';
import {useFeedbackMachineNavigation} from './feedbackMachineHook';

export const FeedbackQuestion: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const {navigate} = useFeedbackMachineNavigation(navigation);
  return (
    <Screen
      showBack={true}
      onBack={() => navigate({type: 'CLICK_BACK'})}
      title="Have fun?"
      testID="feedbackQuestion">
      <Button
        style={{marginBottom: 50}}
        onPress={() => navigate({type: 'CLICK_YES'})}>
        YES
      </Button>
      <Button status="danger" onPress={() => navigate({type: 'CLICK_NO'})}>
        NO
      </Button>
    </Screen>
  );
};
