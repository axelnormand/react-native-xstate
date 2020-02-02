import {Machine, assign, interpret, Interpreter} from 'xstate';

export type StateSchema = {
  states: {
    home: {};
    feedbackQuestion: {};
    feedbackForm: {};
    thanks: {};
  };
};

export type Event =
  | {type: 'CLICK_FEEDBACK'}
  | {type: 'CLICK_YES'}
  | {type: 'CLICK_NO'}
  | {type: 'SUBMIT_FEEDBACK'; feedback: string}
  | {type: 'CLICK_BACK'}
  | {type: 'CLICK_HOME'};

export type Context = {submitted: boolean; feedback: string};

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
      meta: {
        route: 'Home',
      },
    },
    feedbackQuestion: {
      on: {
        CLICK_YES: 'thanks',
        CLICK_NO: 'feedbackForm',
        CLICK_BACK: 'home',
      },
      meta: {
        route: 'FeedbackQuestion',
      },
    },
    feedbackForm: {
      on: {
        SUBMIT_FEEDBACK: {
          target: 'thanks',
          actions: assign((_, event) => {
            return {
              feedback: event.feedback,
              submitted: true,
            };
          }),
        },
      },
      meta: {
        route: 'FeedbackForm',
      },
    },
    thanks: {
      on: {
        CLICK_HOME: 'home',
      },
      meta: {
        route: 'Thanks',
      },
    },
  },
});

/** start singleton feedback machine on bootstrap */
export const feedbackService = interpret(feedbackMachine).start();
