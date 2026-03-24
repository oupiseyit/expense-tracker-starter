# Project Guidelines

## Overview

React expense tracker starter app (Vite + React 19). Intentionally contains bugs, poor UI, and messy code — designed as a teaching project for incremental refactoring.

## Build and Test

```bash
npm install           # Install dependencies
npm run dev           # Dev server → http://localhost:5173
npm run build         # Production build → dist/
npm run lint          # ESLint check
```

> **Windows note:** Use `npm.cmd` instead of `npm` if PowerShell execution policy blocks scripts.

## Architecture

- **Single-file app** — all logic lives in `src/App.jsx` (~180 lines)
- **No component extraction** — summary cards, form, filters, and transaction table are all inline
- **State:** multiple `useState` calls (no context, no external state library)
- **Styling:** plain CSS files (`App.css`, `index.css`), kebab-case class names, no CSS modules

## Known Issues (Intentional)

These are learning targets, not legacy debt:

1. **Amounts stored as strings** — causes string concatenation instead of arithmetic in totals
2. **Missing table column** — `Type` header exists but no matching `<td>` in rows
3. **Data error** — "Freelance Work" marked as expense, should be income
4. **No delete feature** — `.delete-btn` CSS exists but no button in DOM
5. **Monolithic component** — everything in one file, no extraction

## Conventions

- **Components:** PascalCase filenames, `.jsx` extension
- **Variables:** camelCase
- **CSS classes:** kebab-case
- **Imports:** relative paths, CSS imported at component level
- **State:** React `useState` hooks (keep consistent with existing pattern unless refactoring)

## Refactoring Targets

When asked to improve the code, consider these extraction candidates:
- `<TransactionTable>`, `<AddTransactionForm>`, `<SummaryCard>` components
- `useTransactions` custom hook for transaction logic
- Constants file for hardcoded categories
