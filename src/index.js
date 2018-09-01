import React from 'react';
import ReactDom from 'react-dom';

import App from './component/app/app.js';
import registerServiceWorker from './registerServiceWorker.js';

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();