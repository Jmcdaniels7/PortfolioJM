import { useState } from 'react';
import './App.css';
import TechTicker from "./components/TechTicker/TechTicker";
import Bio from "./components/Bio/Bio";
import ProjectSearch from "./components/ProjectSearch/ProjectSearch"; // Make sure this import exists

const logos = [
  "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/spring-boot/spring-boot.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/django/django.png",
  "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
  "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/azure/azure.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
];

const App = () => {
  return (
    <div className="page-container">

      <header>
        <div className="wrapper">
          <div className="welcome-container">
            <span>Welcome</span>
            <span>to</span>
            <span>Jacob</span> 
            <span>McDaniels</span>
            <span>Portfolio!</span>
          </div>
        </div>
        
        <div className="root-tech-ticker">
          <TechTicker logos={logos} />
        </div>
        
      </header>

      <div className="root-bio">
        <Bio />
      </div>

      <div className="root-project-search">
        <ProjectSearch />
      </div>
    </div>
  )
}

export default App;
