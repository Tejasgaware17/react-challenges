import { useState, useEffect, useRef } from 'react'
import './styles.css'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const items = ['Profile', 'Appearance', 'Settings', 'Logout']

  return (
    <div className="menu-container" ref={menuRef}>
      <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        Menu {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <ul className="menu-list">
          {items.map(item => (
            <li key={item} className="menu-item" onClick={() => setIsOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
