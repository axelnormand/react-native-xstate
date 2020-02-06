/**
 * make react navigation transitions happen in jest to test whole app
 * https://www.native-testing-library.com/docs/example-navigation
 s*/
export const mockGesturesForNavigation = () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    Directions: {},
  };
};
