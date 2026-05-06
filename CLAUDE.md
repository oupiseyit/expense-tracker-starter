# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

This is a React 19 + Vite single-page app. All application logic lives in a single file:

- `src/App.jsx` — entire app: state, filtering, form handling, and rendering
- `src/App.css` — all styles
- `src/main.jsx` — React entry point

### Known intentional issues (course material)

This is a starter project for a Claude Code course. It intentionally contains:

- **Bug**: `amount` is stored as a string in transaction state. The `reduce` calls for `totalIncome` and `totalExpenses` use string concatenation instead of numeric addition.
- **Poor UI**: minimal styling, no responsiveness polish
- **Messy code**: monolithic component, no separation of concerns

### Data model

Transactions are stored in local React state (no persistence). Each transaction:
```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
```
