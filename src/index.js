import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import AuthExample from './App3';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <App />
   {/*<AuthExample />*/}
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
