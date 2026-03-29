# Challenge #3: The Accessible Menu

![Menu Demo](./menu-gif.gif)

### The Goal

Build a UI dropdown that mimics native OS behavior, focusing on state synchronization and global event handling.

### Key Technical Hurdles

- **DOM vs. Virtual DOM:** Using `useRef` to bridge the gap between React and the browser's physical DOM nodes.
- **Global Event Listeners:** Implementing a "Click-Outside" pattern that listens to the entire document but only when the menu is active.
- **Memory Management:** Correctly cleaning up event listeners in the `useEffect` return block to prevent memory leaks and performance degradation.

### My Solution

I focused on a "Clean & Essential" approach. The component uses a `menuRef` to determine if a user's click landed inside the component boundaries. If not, the menu closes automatically. I also implemented `KeyboardEvent` handling to allow users to dismiss the menu instantly using the `Escape` key, ensuring a smooth UX for both mouse and keyboard users.

The implementation is fully type-safe, replacing `any` with specific `MouseEvent` and `KeyboardEvent` types to leverage TypeScript's full power.
