import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './Home';
import {FeedbackForm} from './FeedbackForm';

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    FeedbackForm: FeedbackForm,
  },
  {
    headerMode: 'none',
  },
);

export const AppNavigator = createAppContainer(HomeNavigator);
