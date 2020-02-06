import React from 'react';
import {Route, stack} from '../navigation';
import {AppWrapper} from '../AppWrapper';

/** mock the navigation to render correct stack of current route when navigate called */
export const MockApp: React.FC = () => {
  // store current route
  const [route, setRoute] = React.useState<Route>('Home');
  const navigation = {
    navigate: (nextRoute: Route) => setRoute(nextRoute),
  };

  // create react component of current route by looking it up in stacks
  const navigator = React.createElement(stack[route], {navigation} as any);

  // return App with a mock navigation
  return <AppWrapper>{navigator}</AppWrapper>;
};
