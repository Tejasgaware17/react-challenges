# Challenge: Live Search with Debouncing

### The Goal
Build a performant search bar that fetches users from an API without overloading the server or causing UI "flicker."

### Key Technical Hurdles
- **Debouncing:** Preventing an API call on every single keystroke.
- **Race Conditions:** Ensuring that an older, slow API response doesn't overwrite a newer, fast one.
- **Keyboard Navigation:** Managing focus and selection using only the Arrow keys and Enter.

### My Solution
I implemented a custom `useSearch` hook that utilizes `AbortController` to cancel pending requests and a `setTimeout` for debouncing. The UI uses native CSS for high performance and zero external dependencies.