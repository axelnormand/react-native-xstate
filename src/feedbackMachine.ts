import {Machine, assign} from 'xstate';

type StateSchema = {
  states: {
    home: {};
    feedbackQuestion: {};
    feedbackForm: {};
    thanks: {};
  };
};

type Event =
  | {type: 'CLICK_FEEDBACK'}
  | {type: 'CLICK_YES'}
  | {type: 'CLICK_NO'}
  | {type: 'SUBMIT_FEEDBACK'; feedback: string}
  | {type: 'CLICK_BACK'}
  | {type: 'CLICK_HOME'};

type Context = {submitted: boolean; feedback: string};

export const feedbackMachine = Machine<Context, StateSchema, Event>({
  context: {
    submitted: false,
    feedback: '',
  },
  initial: 'home',
  states: {
    home: {
      on: {
        CLICK_FEEDBACK: {
          target: 'feedbackQuestion',
          cond: context => !context.submitted,
        },
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
        SUBMIT_FEEDBACK: {
          actions: assign((_, event) => {
            return {
              feedback: event.feedback,
              submitted: true,
            };
          }),
        },
      },
    },
    thanks: {
      on: {
        CLICK_HOME: 'home',
      },
    },
  },
});
