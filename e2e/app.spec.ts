import {device, element, by} from 'detox';
import {createModel} from '@xstate/test';
import {getFeedbackMachine} from '../src/feedbackMachine';

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

// add meta test entries to each state
const feedbackMachine = getFeedbackMachine();

feedbackMachine.states.home.meta.test = async () =>
  await element(by.id('home'));

feedbackMachine.states.feedbackQuestion.meta.test = async () =>
  await element(by.id('feedbackQuestion'));

feedbackMachine.states.feedbackForm.meta.test = async () =>
  await element(by.id('feedbackForm'));

feedbackMachine.states.thanks.meta.test = async () =>
  await element(by.id('thanks'));

const feedbackModel = createModel(feedbackMachine).withEvents({
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
    exec: async () => {
      await element(by.id('submit_feedback')).tap();
    },
  },
  CLICK_BACK: {
    exec: async () => {
      await element(by.id('click_feedback')).tap();
    },
  },
  CLICK_HOME: {
    exec: async () => {
      await element(by.id('click_home')).tap();
    },
  },
});
