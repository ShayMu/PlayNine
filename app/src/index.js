import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/general.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
