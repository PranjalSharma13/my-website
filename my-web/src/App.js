import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './RoutesPage';
import './App.css';
import Header from './components/Header';

function App() {
  return (
  <Router basename="/my-website">
    <div>
      <Header/>
    <RoutesPage />
    </div>
  </Router>
  );
}

export default App;
