import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button} from '@ui-kitten/components';
import {useService} from '@xstate/react';
import {Screen} from './Screen';
import {useFeedbackMachineNavigation} from './feedbackMachineHook';
import {feedbackService} from './feedbackMachine';

export const Home: NavigationStackScreenComponent = ({navigation}) => {
  const [current] = useService(feedbackService);
  const {navigate} = useFeedbackMachineNavigation(navigation);
  return (
    <Screen title="Home" testID="home">
      <Button
        disabled={!current.context.submitted}
        onPress={() => navigate({type: 'CLICK_FEEDBACK'})}>
        FEEDBACK
      </Button>
    </Screen>
  );
};
