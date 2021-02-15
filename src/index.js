import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
