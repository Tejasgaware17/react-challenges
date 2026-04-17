import { useState } from "react"
// import SearchInput from './challenges/LiveSearch'
// import Accordian from './challenges/Accordion'
// import { Menu } from './challenges/Menu'
import { Modal } from "./challenges/Modal"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* <SearchInput /> */}
      {/* <Accordian /> */}
      {/* <Accordian multi={true} /> */}
      {/* <Menu /> */}

      <div style={{ padding: '20px'}}>
        <h1>Modal Challenge</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Welcome!">
          <p>This is a custom modal built with React Portals.</p>
          <button onClick={() => setIsModalOpen(false)}>Got it!</button>
        </Modal>
      </div>
    </>
  )
}
