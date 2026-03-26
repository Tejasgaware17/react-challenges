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

export default function Accordian() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="accordion-wrapper">
      <h2 className="accordion-title">Accordion menu</h2>
      <div className="accordion-list">
        {data.map(item => (
          <div key={item.id} className="accordion-item">
            <button
              className={`accordion-header ${activeId === item.id ? 'active' : ''}`}
              onClick={() => toggle(item.id)}
              aria-expanded={activeId === item.id}
            >
              <span>{item.title}</span>
              <span className="icon">{activeId === item.id ? '-' : '+'}</span>
            </button>

            {activeId === item.id && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
