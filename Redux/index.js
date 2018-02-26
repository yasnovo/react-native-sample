import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import AppNavigation from '../Navigation/AppNavigation'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
}

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
  })

  const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  console.log("hogehogeo")
  return createStore(rootReducer,applyMiddleware(middleware));
}
