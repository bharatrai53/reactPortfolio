import React from 'react';
import Project from '../components/Project';


function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>
      <Project
        title="Weather Dashboard"
        description="Checkout this cool weather dashboard!"
        demo="https://bharatrai53.github.io/weatherDashboard/"
        code="https://github.com/bharatrai53/weatherDashboard"
      />
      <Project
        title="Coding Quiz"
        description="Checkout this cool coding quiz!"
        demo="https://bharatrai53.github.io/CodingQuiz/"
        code="https://github.com/bharatrai53/CodingQuiz"
      />
       <Project
        title="Notetaker"
        description="Checkout this cool notetaking app!"
        demo="https://bharatrai53.github.io/notetaker/"
        code="https://github.com/bharatrai53/notetaker"
      />
       <Project
        title="Portfolio 1"
        description="Checkout my first attempt at a portfolio!"
        demo="https://bharatrai53.github.io/Portfolio-Project/"
        code="https://github.com/bharatrai53/Portfolio-Project"
      />
       <Project
        title="MyBuddy"
        description="Checkout this project I made!"
        demo="https://afternoon-beyond-13914.herokuapp.com/"
        code="https://github.com/gavinrn/MyBuddy"
      />
       <Project
        title="MunchMap"
        description="Checkout this map app I made!"
        demo="https://github.com/Adriansyn/MunchHub"
        code="https://github.com/Adriansyn/MunchHub"
      />
    </div>
  );
}

export default Portfolio;