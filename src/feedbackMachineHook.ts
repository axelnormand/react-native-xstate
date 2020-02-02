import {useService} from '@xstate/react';
import {NavigationScreenProp} from 'react-navigation';
import {Event, feedbackService} from './feedbackMachine';

/** uses singleton feedback service to send event and then navigate to new state route */
export const useFeedbackMachineNavigation = (
  navigation: NavigationScreenProp<any>,
) => {
  const [, send] = useService(feedbackService);
  const navigate = (event: Event) => {
    const newState = send(event);
    navigation.navigate(newState.meta.route);
  };
  return {navigate};
};
