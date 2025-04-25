import React, { useState } from "react"

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      onSearch(username)
      setUsername("")
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">
        <img src="/public/magnifying.svg" alt="" />
      </button>
    </form>
  )
}

export default SearchBar
