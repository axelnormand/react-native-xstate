import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';
import {Home} from './Home';
import {FeedbackQuestion} from './FeedbackQuestion';
import {FeedbackForm} from './FeedbackForm';
import {Thanks} from './Thanks';

export type Route = 'Home' | 'FeedbackQuestion' | 'FeedbackForm' | 'Thanks';

export const stack: {[key in Route]: NavigationStackScreenComponent} = {
  Home,
  FeedbackQuestion,
  FeedbackForm,
  Thanks,
};

const HomeNavigator = createStackNavigator(stack, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
