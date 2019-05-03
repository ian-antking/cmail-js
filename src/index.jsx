import 'raf/polyfill';
import React from 'react';
import App from './components/app';
import { render } from 'react-dom';
import { messages } from './data/messages.json';

render(<App messages={messages} />, document.getElementById('root'));
