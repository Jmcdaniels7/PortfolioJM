import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TechTicker from "./components/TechTicker/TechTicker";
import Bio from "./components/Bio/Bio";

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
  /*https://raw.githubusercontent.com/github/explore/main/topics/flask/flask.png*/
  
  
];

const App = () => {
  return (
    <html>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Bubblegum Sans' rel='stylesheet'></link>
      </head>
      <body>
        <header>
          <div>

            <div class="wrapper">

              <div class="welcome-container">
                <span>Welcome</span>
                <span>to</span>
                <span>Jacob</span> 
                <span>McDaniels</span>
                <span>Portfolio!</span>
              </div>

            </div>
    
            <TechTicker logos={logos} />

          </div>
      </header>
        
        <div>
          <Bio />

        </div>
        
      </body>

    </html>
  )
}

export default App
