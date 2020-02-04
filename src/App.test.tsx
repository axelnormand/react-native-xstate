import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders correctly', () => {
  const {getByTestId} = render(<App />);

  expect(getByTestId('home')).toBeDefined();
});
