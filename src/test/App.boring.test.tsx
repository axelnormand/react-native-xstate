import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {mockGesturesForNavigation} from './mockNavigation';
import App from '../App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-gesture-handler', () => mockGesturesForNavigation());

describe('Feedback App the boring way', () => {
  it('Home: Should show the Question screen when "Feedback" is clicked', async () => {
    const {getByTestId} = render(<App />);

    // Home screen should be visible at first
    await expect(getByTestId('home'));

    // Click the "Feedback" button
    fireEvent.press(getByTestId('click_feedback'));

    // Now the Question screen should be visible
    await expect(getByTestId('feedbackQuestion'));
  });

  it('FeedbackQuestion: should show the Form screen when "No" is clicked', async () => {
    const {getByTestId} = render(<App />);

    // Click some buttons
    fireEvent.press(getByTestId('click_feedback'));
    await getByTestId('feedbackQuestion');

    fireEvent.press(getByTestId('click_no'));

    // Now the Form screen should be visible
    await expect(getByTestId('feedbackForm'));
  });
});
