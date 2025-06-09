import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TechTicker from "./components/TechTicker";

const logos = [
  "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
  "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
];

const App = () => {
  return (
    <div>
      <h2>React app </h2>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Tech Stack Logos</h2>
      <TechTicker logos={logos} />
    </div>
    
  )
}

export default App
