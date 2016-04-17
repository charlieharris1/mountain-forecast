import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MountainContainer.jsx';

ReactDOM.render(
  <App url="/api/mountainAreas" pollInterval={30000} />,
  document.getElementById('app')
);