# Strategy Grid Game
A web implementation of the classic Connect Four game built with React and TypeScript using Vite for fast compilation and hot module replacement.

Setup
------------
Run `npm install` to install all the dependencies.

To start the development server, run `npm run dev`. This will start the server on `http://localhost:5173`.

Features
-----------

- Play Connect Four against another player
- Visual indication of current player's turn
- Checks for horizontal, vertical, and diagonal wins
- Displays a message for win or tie
- Reset button to start a new game

Approach
-----------

1. **Component-based Architecture:** The application is built using React's component-based architecture. Each part of the UI, such as the game board and player information, is encapsulated in its own component.

2. **Custom Hook for Game Logic:** The core game logic is encapsulated in a custom hook (useBoard). This hook manages the state of the board, the current player, and the winner, as well as providing functions to handle checker drops and game resets.

4. **Separation of Concerns:** The logic for checking the winner and the constants used in the game are separated into different files (checkWinner.ts and gameConstants.ts). This makes the code modular and easier to maintain.


Engineering Tradeoffs
-----------

1. **Lifting State Up Vs Context API:** Lifting the state up to the closest common ancestor, which in this case is App.tsx, helps us avoid more complex (and often unnecessary) patterns for managing state in child components. It also simplifies the handling of state by centralizing it, avoiding the hassle of managing state across multiple child components.

2. **Separate Logic & UI in React Using Custom Hook:** They allow for better code reuse and organization by extracting side effects into reusable hooks. However, they can introduce an additional layer of abstraction that might be harder to debug.

3. **TypeScript:** TypeScript is used to ensure type safety and catch errors at compile time.
However, it adds complexity to the build process and has a steeper learning curve.

4. **Multiple File Components:** Separating concerns by splitting a component into multiple files can improve maintainability and make it easier to manage large components. However, it can increase number of files and make navigation harder
