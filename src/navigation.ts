import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './Home';
import {FeedbackQuestion} from './FeedbackQuestion';
import {FeedbackForm} from './FeedbackForm';
import {Thanks} from './Thanks';

const homeStack = {
  Home,
  FeedbackQuestion,
  FeedbackForm,
  Thanks,
};

const HomeNavigator = createStackNavigator(homeStack, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
