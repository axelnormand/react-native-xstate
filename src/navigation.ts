import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './Home';
import {FeedbackQuestion} from './FeedbackQuestion';
import {FeedbackForm} from './FeedbackForm';
import {Thanks} from './Thanks';

export const stacks = {
  Home,
  FeedbackQuestion,
  FeedbackForm,
  Thanks,
};

const HomeNavigator = createStackNavigator(stacks, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
