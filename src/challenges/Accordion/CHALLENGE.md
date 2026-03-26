# Challenge: Flexible & Accessible Accordion

### The Goal

Build a robust, reusable Accordion component that can handle:

1. **Single-Open:** Opening one item automatically closes others (Standard FAQ style).
2. **Multi-Open:** Allowing multiple sections to stay expanded simultaneously.

### Key Technical Hurdles

- **State Scalability:** Moving from a simple `number | null` state to an `Array<number>` to support both single and multi-open logic without rewriting the component.
- **Declarative UI:** Ensuring the "Active" styles and icons toggle seamlessly based on the state array.
- **Accessibility (A11y):** Implementing the `aria-expanded` attribute to inform screen readers of the content's visibility.

### My Solution

Instead of creating two different components, I implemented a **Universal State Pattern**. By using an array (`openIds`) and a `multi` boolean prop, the component decides whether to _filter_ the array (Single-Open) or _append_ to it (Multi-Open).

I also utilized **CSS Keyframes** for a lightweight "slide-down" animation, avoiding the performance overhead of heavy animation libraries.

---
