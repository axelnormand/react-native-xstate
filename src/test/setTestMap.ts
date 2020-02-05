import {StateMachine} from 'xstate';

/** mutate state machine and set the meta.test value for each state key to the one from testMap provided */
export const setTestMap = (
  stateMachine: StateMachine<any, any, any>,
  testMap: {[state: string]: (prop: any) => Promise<any> | any},
) => {
  Object.keys(stateMachine.states).forEach(state => {
    stateMachine.states[state].meta.test = testMap[state];
  });
  return stateMachine;
};
