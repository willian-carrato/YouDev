import React from 'react';
import Header from './components/Header';

import './style.css';
const Home = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="navbar">navBar</div>
        <div className="feed">Feed</div>
      </main>
    </div>
  );
};

export default Home;
