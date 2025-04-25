import React, { useState } from "react"
import SearchBar from "./components/SearchBar"
import UserProfile from "./components/UserProfile"
import Loading from "./components/Loading"
import ErrorMessage from "./components/ErrorMessage"
import "./App.css"

function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (username) => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) {
        throw new Error("Nenhum perfil foi encontrado com esse nome de usuário.")
      }
      const data = await response.json()
      setUser(data)
    } catch (err) {
      setError(err.message)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="app-container">
      <section className="bgSection">
        <div className="textHeader">
          <img src="/public/github.svg" alt="" />
          <span>Perfil</span>
          <img src="/public/githubLogo.svg" alt="" />
        </div>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          user && <UserProfile user={user} />
        )}
      </section>
    </main>
  )
}

export default App
