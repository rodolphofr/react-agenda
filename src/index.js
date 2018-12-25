import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';

const root: ?HTMLElement = document.getElementById('root');
if (root) ReactDOM.render(<HomePage />, root);
