import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './Home';
import {FeedbackQuestion} from './FeedbackQuestion';
import {FeedbackForm} from './FeedbackForm';
import {Thanks} from './Thanks';

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    FeedbackQuestion: FeedbackQuestion,
    FeedbackForm: FeedbackForm,
    Thanks: Thanks,
  },
  {
    headerMode: 'none',
  },
);

export const AppNavigator = createAppContainer(HomeNavigator);
