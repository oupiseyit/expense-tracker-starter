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

This is a React 19 + Vite single-page app. Components:

- `src/App.jsx` — root component; holds `transactions` state and composes child components
- `src/Summary.jsx` — displays income/expenses/balance; computes totals from `transactions` prop
- `src/TransactionForm.jsx` — form to add a new transaction; owns its own form state, calls `onAdd` prop
- `src/TransactionList.jsx` — filterable table of transactions; owns filter state, receives `transactions` prop
- `src/App.css` — all styles
- `src/main.jsx` — React entry point

### Known intentional issues (course material)

This is a starter project for a Claude Code course. It intentionally contains:

- **Poor UI**: minimal styling, no responsiveness polish

### Data model

Transactions are stored in local React state (no persistence). Each transaction:
```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
```
