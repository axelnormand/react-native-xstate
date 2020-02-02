import {useService} from '@xstate/react';
import {NavigationScreenProp} from 'react-navigation';
import {Event, feedbackService, id} from './feedbackMachine';

/** uses singleton feedback service to send event and then navigate to new state route */
export const useFeedbackMachineNavigation = (
  navigation: NavigationScreenProp<any>,
) => {
  const [, send] = useService(feedbackService);
  const navigate = (event: Event) => {
    const newState = send(event);
    const route = newState.meta[`${id}.${newState.value}`].route;
    navigation.navigate(route);
  };
  return {navigate};
};
