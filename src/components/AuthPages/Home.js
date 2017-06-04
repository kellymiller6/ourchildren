import React from 'react';
import { quotes } from '../../quotes/quotes.js'

const Home = () => {
  const display = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(display);
  return (
   <div className='quotes Home'>
    <h3>{display.Quote}</h3>
    <h5>{display.Author}</h5>
   </div>
  );
};

export default Home;
