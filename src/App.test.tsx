import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders correctly', () => {
  renderer.create(<App />);
});
