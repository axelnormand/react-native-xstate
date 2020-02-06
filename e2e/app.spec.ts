import {device, element, by} from 'detox';
import {createModel} from '@xstate/test';
import {setTestMap} from '../src/test/setTestMap';
import {getTestFeedbackMachine} from '../src/test/testFeedbackMachine';

// add meta test entries to each state
const testFeedbackMachine = setTestMap(getTestFeedbackMachine(), {
  home: async () => await element(by.id('home')),
  feedbackQuestion: async () => await element(by.id('feedbackQuestion')),
  feedbackForm: async () => await element(by.id('feedbackForm')),
  thanks: async () => await element(by.id('thanks')),
});

// add detox action for each event
export const feedbackModel = createModel(testFeedbackMachine).withEvents({
  CLICK_FEEDBACK: {
    exec: async () => {
      await element(by.id('click_feedback')).tap();
    },
  },
  CLICK_YES: {
    exec: async () => {
      await element(by.id('click_yes')).tap();
    },
  },
  CLICK_NO: {
    exec: async () => {
      await element(by.id('click_no')).tap();
    },
  },
  SUBMIT_FEEDBACK: {
    exec: async (_, event) => {
      // @ts-ignore event type for now
      await element(by.id('input_feedback')).typeText(event.feedback);
      await element(by.id('submit_feedback')).tap();
    },
    cases: [{feedback: 'state machines ftw'}, {feedback: ''}],
  },
  CLICK_BACK: {
    exec: async () => {
      await element(by.id('click_back')).tap();
    },
  },
  CLICK_HOME: {
    exec: async () => {
      await element(by.id('click_home')).tap();
    },
  },
});

// now traverse tree testing all simple paths
describe('Feedback App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const testPlans = feedbackModel.getSimplePathPlans();

  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(
          path.description,
          async () => {
            await path.test({});
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
