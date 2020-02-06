import {Machine, assign, interpret} from 'xstate';
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

export const getFeedbackMachine = () =>
  Machine<Context, StateSchema, Event>({
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
export const feedbackService = interpret(getFeedbackMachine())
  .onTransition(state => console.log(`state transition to ${state.value}`))
  .start();
