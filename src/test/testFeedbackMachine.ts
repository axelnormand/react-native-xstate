import {Machine} from 'xstate';
import {StateSchema, Context, Event} from 'src/feedbackMachine';

/**
 * Better practice to re-create a simple machine to test states "as a user would see it".
 * Using the real machine would tie the test to implementation details
 */
export const getTestFeedbackMachine = () =>
  Machine<Context, StateSchema, Event>({
    id: 'testFeedbackMachine',
    initial: 'home',
    states: {
      home: {
        on: {
          CLICK_FEEDBACK: 'feedbackQuestion',
        },
      },
      feedbackQuestion: {
        on: {
          CLICK_YES: 'thanks',
          CLICK_NO: 'feedbackForm',
          CLICK_BACK: 'home',
        },
      },
      feedbackForm: {
        on: {
          SUBMIT_FEEDBACK: 'thanks',
        },
      },
      thanks: {
        on: {
          CLICK_HOME: 'home',
        },
      },
    },
  });
