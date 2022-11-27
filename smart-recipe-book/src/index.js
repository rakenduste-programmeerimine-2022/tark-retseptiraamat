import React from 'react';
import ReactDOM from 'react-dom/client';
import TheFeed from './pages/TheFeed';
import MyFeed from './pages/MyFeed';
import MyRecipes from './pages/MyRecipes';
import Routes from './components/Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <TheFeed />
  </React.StrictMode>
);