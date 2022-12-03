import React from 'react';
import ReactDOM from 'react-dom/client';
import TheFeed from './pages/TheFeed';
import Filter from './components/Filter';

import Routing from './components/Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Routing />
    <TheFeed />
    <Filter />
    
  </React.StrictMode>
);