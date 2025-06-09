import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TechTicker from "./components/TechTicker";

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
  "https://raw.githubusercontent.com/github/explore/main/topics/flask/flask.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/azure/azure.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
  
  
  
];

const App = () => {
  return (
    <html>
      <body>
        <header>
          <div>
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>Welcome to Jacob McDaniels Portfolio!</h2>
            <TechTicker logos={logos} />
          </div>

      </header>
        <div>
          <h2>here </h2>
        </div>
      </body>

    </html>
  )
}

export default App
