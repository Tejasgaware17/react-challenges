import { useState } from 'react'
import './styles.css'

interface AccordionItem {
  id: number
  title: string
  content: string
}

const data: AccordionItem[] = [
  { id: 1, title: 'What is React?', content: 'A JavaScript library for building user interfaces.' },
  {
    id: 2,
    title: 'Why use TypeScript?',
    content: 'It adds static typing to prevent runtime errors.',
  },
  {
    id: 3,
    title: 'What is Vite?',
    content: 'A modern build tool that is significantly faster than CRA.',
  },
]

export default function Accordian({ multi = false }: { multi?: boolean }) {
  const [openIds, setOpenIds] = useState<number[]>([])

  function toggle(id: number) {
    if (multi) {
      setOpenIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="accordion-wrapper">
      <h2 className="accordion-title">FAQ {multi ? '(Multi-Open)' : '(Single-Open)'}</h2>

      <div className="accordion-list">
        {data.map(item => {
          const isOpen = openIds.includes(item.id)

          return (
            <div key={item.id} className="accordion-item">
              <button
                className={`accordion-header ${isOpen ? 'active' : ''}`}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span className="icon">{isOpen ? '-' : '+'}</span>
              </button>

              {isOpen && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
