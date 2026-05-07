# Code Reviewer Agent Memory

## Project Overview
- React 19 + Vite SPA, no backend, no persistence (localStorage only for theme)
- Components: App.jsx, Summary.jsx, TransactionForm.jsx, TransactionList.jsx, SpendingChart.jsx
- Shared constants: src/constants.js exports CATEGORIES array (was previously duplicated — now fixed)
- Styling: App.css (all component styles + CSS variable theming), index.css (global reset + body base)
- Data model: `{ id, description, amount, type, category, date }`
- Chart library: recharts (ComposedChart with Bar + Line overlay)
- Linter: ESLint 9 flat config, react-hooks plugin enforced, no-unused-vars with varsIgnorePattern for ALL_CAPS

## Confirmed State After Full Review (2026-05-07)

### Fixed since last review
- CATEGORIES extracted to constants.js — no longer duplicated
- Amount now normalized via parseFloat in TransactionForm handleSubmit
- Stale closure on onAdd/onDelete fixed — both use functional updater (prev =>)
- Amount validation is now thorough: guards empty, NaN, and <= 0
- index.css body now uses var(--bg) and var(--text-primary) — responds to theme
- Summary.jsx uses a single reduce pass (not two separate passes)
- SpendingChart.jsx uses parseFloat(t.amount) inside useMemo — consistent
- TransactionList has empty-state row with colSpan=5
- useMemo applied in SpendingChart for data calculation

### Remaining issues (confirmed present)
- `dateStr` computed at module scope in App.jsx — stale if app stays open past midnight
- `Date.now()` used as transaction id — near-zero but non-zero collision risk
- `toggleTheme` setTimeout has no cleanup ref — 400ms, harmless in practice
- `table`, `th`, `td`, `thead` are global element selectors in App.css — scoping risk
- TransactionForm: no <label> elements on any input — a11y gap
- TransactionList: empty <th> for delete column — missing aria-label or visually-hidden text
- SpendingChart: tickStyle/tooltipStyle plain objects rebuilt on every theme-change render (not memoized)
- COLORS array length (7) must stay in sync with CATEGORIES length (7) manually — fragile
- No PropTypes or TypeScript — acceptable for course project
- No useCallback on onAdd/onDelete props — acceptable at this scale
- window.confirm for delete — blocks main thread; acceptable for course project
- Seed data transaction id:4 type:"income" category:"salary" — now semantically correct

## CSS Architecture Notes
- App.css :root defines all CSS variables; index.css body references them — correct load order (index first, App second)
- [data-theme="night"] body in App.css correctly overrides gradient background
- .theme-transitioning uses !important on transitions — intentional
- table/th/td/thead are global — will affect any future table added to the app
