# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expense tracker app from Mosh's [Claude Code course](https://codewithmosh.com/p/claude-code). It intentionally has bugs, poor UI, and messy code — all fixed throughout the course.

## Commands

- `npm run dev` — Start Vite dev server (http://localhost:5173)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Architecture

React 19 app with Vite 7. No routing, no state library, no backend. Plain CSS styling via `App.css` and `index.css`.

- `src/App.jsx` — Root component, owns `transactions` state
- `src/Summary.jsx` — Displays income/expenses/balance totals (computes from `transactions` prop)
- `src/TransactionForm.jsx` — Add transaction form (owns form state, calls `onAddTransaction` callback)
- `src/TransactionList.jsx` — Filtered transaction table (owns filter state, receives `transactions` prop)

## Known Intentional Issues

- "Freelance Work" is typed as "expense" instead of "income"
