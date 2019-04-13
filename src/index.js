import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyle from './components/GlobalStyle';

const AppContainer = () => (
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);

render(<AppContainer />, document.getElementById('app'));
