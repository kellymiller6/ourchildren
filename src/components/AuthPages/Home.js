import React from 'react';
import { quotes } from '../../quotes/quotes.js'

const Home = () => {
  const display = quotes[Math.floor(Math.random() * quotes.length)];
  const parentIntro = `The Parent Page contains: Foster and Adoption Worker Info (for you not your foster children). Babysitters approved by your foster care organization.`
  const childIntro= `The Children Page contains: Important information for each child in care. Each child's social worker's contact information.`
  return (
    <div className='Home'>
      <div className='welcome-statement'>
        <h2> Welcome to Our Children</h2>
        <p> {parentIntro} </p>
        <p> {childIntro} </p>
      </div>
      <div className='quotes'>
        <h3>{display.Quote}</h3>
        <h5>{display.Author}</h5>
      </div>
    </div>
  );
};

export default Home;
