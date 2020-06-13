import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from "aws-amplify";

import * as serviceWorker from './serviceWorker';

Amplify.configure({
	Auth: {
		mandatorySignId: true,
		region: "us-east-1",
		userPoolId: "us-east-1_gOSIRZBy7",
		userPoolWebClientId: "2ho6qk4plnut1fb42921l7s0qa"
	}
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
