import {Machine, assign, interpret} from 'xstate';
import {element, by} from 'detox';

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

export type Context = {
  submitted: boolean;
  feedback: string;
};

export const id = 'feedbackMachine';

export const feedbackMachine = Machine<Context, StateSchema, Event>({
  id,
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
        test: async () => {
          await element(by.id('home'));
        },
      },
    },
    feedbackQuestion: {
      on: {
        CLICK_YES: {
          target: 'thanks',
          actions: assign<Context>({
            submitted: true,
          }),
        },
        CLICK_NO: 'feedbackForm',
        CLICK_BACK: 'home',
      },
      meta: {
        route: 'FeedbackQuestion',
        test: async () => {
          await element(by.id('feedbackQuestion'));
        },
      },
    },
    feedbackForm: {
      on: {
        SUBMIT_FEEDBACK: {
          target: 'thanks',
          actions: assign((_, event) => ({
            feedback: event.feedback,
            submitted: true,
          })),
        },
      },
      meta: {
        route: 'FeedbackForm',
        test: async () => {
          await element(by.id('feedbackForm'));
        },
      },
    },
    thanks: {
      on: {
        CLICK_HOME: 'home',
      },
      meta: {
        route: 'Thanks',
        test: async () => {
          await element(by.id('thanks'));
        },
      },
    },
  },
});

/** start singleton feedback machine on bootstrap */
export const feedbackService = interpret(feedbackMachine)
  .onTransition(state => console.log('state transition', state))
  .start();
