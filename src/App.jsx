import React from "react"
import SearchBar from "./components/SearchBar"
import "./App.css"

function App() {
  return (
    <main className="app-container">
      <section className="bgSection">
        <div className="textHeader">
          <img src="/public/github.svg" alt="" />
          <span>Perfil</span>
          <img src="/public/githubLogo.svg" alt="" />
        </div>
        <SearchBar />
      </section>
      
    </main>
  )
}

export default App
