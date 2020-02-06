import React from 'react';
import {render, RenderResult, fireEvent} from '@testing-library/react-native';
import {createModel} from '@xstate/test';
import {getFeedbackMachine, Context} from '../feedbackMachine';
import {setTestMap} from './setTestMap';
import App from '../App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.useFakeTimers();

// add meta test entries to each state
const feedbackMachine = setTestMap(getFeedbackMachine(), {
  home: async ({getByTestId}: RenderResult<any>) => {
    await Promise.resolve(true);
    expect(getByTestId('home')).toBeDefined();
  },

  feedbackQuestion: async ({getByTestId, debug}: RenderResult<any>) => {
    await Promise.resolve(true);
    debug();
    expect(getByTestId('feedbackQuestion')).toBeDefined();
  },

  feedbackForm: async ({getByTestId}: RenderResult<any>) => {
    await Promise.resolve(true);
    expect(getByTestId('feedbackForm')).toBeDefined();
  },

  thanks: async ({getByTestId}: RenderResult<any>) => {
    await Promise.resolve(true);
    expect(getByTestId('thanks')).toBeDefined();
  },
});

// add test action for each event
export const feedbackModel = createModel<RenderResult, Context>(
  feedbackMachine,
).withEvents({
  CLICK_FEEDBACK: {
    exec: ({getByTestId}) => {
      fireEvent.press(getByTestId('click_feedback'));
    },
  },
  CLICK_YES: {
    exec: ({getByTestId}) => {
      fireEvent.press(getByTestId('click_yes'));
    },
  },
  CLICK_NO: {
    exec: ({getByTestId}) => {
      fireEvent.press(getByTestId('click_no'));
    },
  },
  SUBMIT_FEEDBACK: {
    exec: async ({getByTestId}, event) => {
      // @ts-ignore event type for now
      fireEvent.changeText(getByTestId('input_feedback'), event.feedback);
      fireEvent.press(getByTestId('submit_feedback'));
    },
    cases: [{feedback: 'state machines ftw'}, {feedback: ''}],
  },
  CLICK_BACK: {
    exec: ({getByTestId}) => {
      fireEvent.press(getByTestId('click_back'));
    },
  },
  CLICK_HOME: {
    exec: ({getByTestId}) => {
      fireEvent.press(getByTestId('click_home'));
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
