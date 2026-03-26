import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import useSearch from './useSearch'
import './styles.css'

export interface User {
  id: number
  firstName: string
  lastName: string
}

export interface SearchResponse {
  users: User[]
}

export default function SearchInput() {
  const [query, setQuery] = useState('')
  const { results, isLoading, error } = useSearch(query)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  function handleSelect(user: User): void {
    setQuery(`${user.firstName} ${user.lastName}`)
    setSelectedIndex(-1)
    alert(`Selected: ${user.firstName}`)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1))
        break
      case 'Enter':
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelect(results[selectedIndex])
        }
        break
      case 'Escape':
        setSelectedIndex(-1)
        setQuery('')
        break
    }
  }

  return (
    <div className="search-container">
      <h2 className="search-title">User Directory</h2>

      <input
        type="text"
        placeholder="Type to search..."
        className="search-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="search-results-area">
        {isLoading && <div className="status-msg loading">Searching users...</div>}
        {error && <div className="status-msg error">Error: {error}</div>}
        {!isLoading && !error && results.length === 0 && query && (
          <div className="status-msg empty">No users found for "{query}"</div>
        )}

        <ul className="results-list">
          {results.map((user, index) => (
            <li
              key={user.id}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => handleSelect(user)}
              className={`result-item ${index === selectedIndex ? 'selected' : ''}`}
            >
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
