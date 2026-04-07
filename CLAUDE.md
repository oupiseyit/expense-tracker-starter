# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a single-component React app (Vite + React 19). All logic lives in `src/App.jsx` — there are no child components, no routing, and no external state management.

**Known bugs and intentional issues** (this is a course starter project):
- `amount` is stored as a string, not a number — causes string concatenation instead of arithmetic in `totalIncome`/`totalExpenses`/`balance` calculations
- "Freelance Work" is seeded with `type: "expense"` but `category: "salary"` (inconsistent data)
- No delete functionality in the UI (`.delete-btn` CSS exists but no button is rendered)

**Data shape** — transactions are plain objects held in `useState`:
```js
{ id, description, amount, type: "income"|"expense", category, date: "YYYY-MM-DD" }
```

**Styling** — plain CSS in `src/App.css`. CSS classes `.income-amount` and `.expense-amount` are reused for both the summary cards and table rows.
