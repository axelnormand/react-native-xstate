import React from 'react';
import {render, RenderResult, fireEvent} from '@testing-library/react-native';
import {createModel} from '@xstate/test';
import {Context, feedbackService} from '../feedbackMachine';
import {setTestMap} from './setTestMap';
import {getTestFeedbackMachine} from './testFeedbackMachine';
import {MockApp} from './MockApp';

beforeEach(() => {
  jest.resetAllMocks();
  // be sure to restart the machine service or will be in wrong state
  feedbackService.stop();
  feedbackService.start();
});

// add meta test entries to each state
const testFeedbackMachine = setTestMap(getTestFeedbackMachine(), {
  home: async ({getByTestId}: RenderResult<any>) => {
    await expect(getByTestId('home')).toBeDefined();
  },

  feedbackQuestion: async ({getByTestId}: RenderResult<any>) => {
    await expect(getByTestId('feedbackQuestion')).toBeDefined();
  },

  feedbackForm: async ({getByTestId}: RenderResult<any>) => {
    await expect(getByTestId('feedbackForm')).toBeDefined();
  },

  thanks: async ({getByTestId}: RenderResult<any>) => {
    await expect(getByTestId('thanks')).toBeDefined();
  },
});

// add test action for each event
export const feedbackModel = createModel<RenderResult, Context>(
  testFeedbackMachine,
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

// now traverse tree testing all simple paths
describe('Feedback App', () => {
  const testPlans = feedbackModel.getSimplePathPlans();

  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(
          path.description,
          async () => {
            const rendered = render(<MockApp />);
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
