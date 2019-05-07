import 'raf/polyfill';
import React from 'react';
import App from './components/app';
import { render } from 'react-dom';
import { messages } from './data/messages.json';
import { HashRouter as Router } from 'react-router-dom';


render(
  (
    <Router>
      <App messages={messages} />
    </Router>
  ), document.getElementById('root')
);
