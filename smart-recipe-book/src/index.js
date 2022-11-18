import React from 'react';
import ReactDOM from 'react-dom/client';
import TheFeed from './pages/TheFeed';
import Filter from './components/Filter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheFeed />
    <Filter />
  </React.StrictMode>
);