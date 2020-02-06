import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MockApp} from './MockApp';

describe('Feedback App the boring way', () => {
  it('Home: Should show the Question screen when "Feedback" is clicked', async () => {
    const {getByTestId} = render(<MockApp />);

    // Home screen should be visible at first
    await expect(getByTestId('home'));

    // Click the "Feedback" button
    fireEvent.press(getByTestId('click_feedback'));

    // Now the Question screen should be visible
    await expect(getByTestId('feedbackQuestion'));
  });

  it('FeedbackQuestion: should show the Form screen when "No" is clicked', async () => {
    const {getByTestId} = render(<MockApp />);

    // Click some buttons
    fireEvent.press(getByTestId('click_feedback'));
    await getByTestId('feedbackQuestion');

    fireEvent.press(getByTestId('click_no'));

    // Now the Form screen should be visible
    await expect(getByTestId('feedbackForm'));
  });
});
