# React Router in TypeScript

Setting up React Router in a TypeScript project can be straightforward once you know the right patterns.

## Installation

First, install the necessary packages:

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

## Basic Setup

Here's a basic setup for React Router with TypeScript:

```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

## Type-Safe Navigation

TypeScript helps ensure type safety when navigating between routes. Make sure to properly type your route parameters and use the `useParams` hook correctly.

## Conclusion

React Router with TypeScript provides excellent type safety and developer experience. The setup is simple and the benefits are significant.

