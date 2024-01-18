import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { withExtraArgument } from 'redux-thunk';

import { rootReducer } from './root-reducer';
import * as api from '../config';

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(withExtraArgument({
    client: axios,
    api,
  }))));