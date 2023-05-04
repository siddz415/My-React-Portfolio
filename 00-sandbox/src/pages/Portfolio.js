import React from 'react';
import PortfolioItems from '../components/PortfolioItems';
import Turnup from '../assets/turnup.png';
import PasswordG from '../assets/pass.png';
import Porfolio1 from '../assets/portfolio.png';
import Quiz from '../assets/quiz.png';
import Spiral from '../assets/spiral.jpg';
import Workday from '../assets/workday.png';

import '../styles/Portfolio.css';
export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Portfolio</h1>
      <div className='portfolioList'>
        <PortfolioItems name="Turn Up" image={Turnup} url="https://github.com/siddz415/Turn-Up" />
        <PortfolioItems name="Password Generator" image={PasswordG} url="https://github.com/siddz415/Password-generator" />
        <PortfolioItems name="HTML/CSS Portfolio" image={Porfolio1} url="https://github.com/siddz415/My-personal-portfolio" />
        <PortfolioItems name="Code Quiz" image={Quiz} url="https://github.com/siddz415/Code-Quiz" />
        <PortfolioItems name="Spiral" image={Spiral} url="https://spiraltravel.herokuapp.com/"/>
        <PortfolioItems name="Work Day Schedular" image={Workday} url="https://github.com/siddz415/Work-Day-Scheduler"/>

      </div>
    </div>
  );
}
