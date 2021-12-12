import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userMdl, apiMdl, languageMdl } from '@middleware';
import { rootReducer } from '@reducers';

if (process.env.NODE_ENV !== 'production') {
}
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...userMdl, ...languageMdl, apiMdl)),
);
