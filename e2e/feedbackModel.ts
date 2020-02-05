import {element, by} from 'detox';
import {createModel} from '@xstate/test';
import {getFeedbackMachine} from '../src/feedbackMachine';
import {setTestMap} from '../src/test/setTestMap';

// add meta test entries to each state
const feedbackMachine = setTestMap(getFeedbackMachine(), {
  home: async () => await element(by.id('home')),
  feedbackQuestion: async () => await element(by.id('feedbackQuestion')),
  feedbackForm: async () => await element(by.id('feedbackForm')),
  thanks: async () => await element(by.id('thanks')),
});

export const feedbackModel = createModel(feedbackMachine).withEvents({
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
      await element(by.id('click_feedback')).tap();
    },
  },
  CLICK_HOME: {
    exec: async () => {
      await element(by.id('click_home')).tap();
    },
  },
});
