import React from 'react';
import {render, RenderResult, fireEvent} from '@testing-library/react-native';
import {createModel} from '@xstate/test';
import {getFeedbackMachine} from '../feedbackMachine';
import {setTestMap} from './setTestMap';
import App from '../App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.useFakeTimers();

// add meta test entries to each state
const feedbackMachine = setTestMap(getFeedbackMachine(), {
  home: ({getByTestId}: RenderResult<any>) =>
    expect(getByTestId('home')).toBeDefined(),

  feedbackQuestion: ({getByTestId}: RenderResult<any>) =>
    expect(getByTestId('feedbackQuestion')).toBeDefined(),

  feedbackForm: ({getByTestId}: RenderResult<any>) =>
    expect(getByTestId('feedbackForm')).toBeDefined(),

  thanks: ({getByTestId}: RenderResult<any>) =>
    expect(getByTestId('thanks')).toBeDefined(),
});

// add test action for each event
export const feedbackModel = createModel(feedbackMachine).withEvents({
  CLICK_FEEDBACK: {
    exec: ({getByTestId}: RenderResult<any>) => {
      fireEvent.press(getByTestId('click_feedback'));
      jest.runAllTicks();
    },
  },
  CLICK_YES: {
    exec: ({getByTestId}: RenderResult<any>) => {
      fireEvent.press(getByTestId('click_yes'));
      jest.runAllTicks();
    },
  },
  CLICK_NO: {
    exec: ({getByTestId}: RenderResult<any>) => {
      fireEvent.press(getByTestId('click_no'));
      jest.runAllTicks();
    },
  },
  SUBMIT_FEEDBACK: {
    exec: async ({getByTestId}: RenderResult<any>, event) => {
      // @ts-ignore event type for now
      fireEvent.changeText(getByTestId('input_feedback'), event.feedback);
      fireEvent.press(getByTestId('submit_feedback'));
      jest.runAllTicks();
    },
    cases: [{feedback: 'state machines ftw'}, {feedback: ''}],
  },
  CLICK_BACK: {
    exec: ({getByTestId}: RenderResult<any>) => {
      fireEvent.press(getByTestId('click_back'));
      jest.runAllTicks();
    },
  },
  CLICK_HOME: {
    exec: ({getByTestId}: RenderResult<any>) => {
      fireEvent.press(getByTestId('click_home'));
      jest.runAllTicks();
    },
  },
});

// now loop through tree testing journeys
describe('Feedback App', () => {
  const testPlans = feedbackModel.getSimplePathPlans();

  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(
          path.description,
          async () => {
            const rendered = render(<App />);
            await path.test(rendered);
          },
          10000,
        );
      });
    });
  });

  it('coverage', () => {
    feedbackModel.testCoverage();
  });
});
