import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// I know--I know, I didn't write any test cases. You can't fault me!
// Test driven development is a chore on small applications like this! You know how I feel!
