# Expense Tracker

> This is the starter project used in my [Claude Code course](https://codewithmosh.com/p/claude-code).

A basic expense tracker app built with React. It intentionally has a bug, poor UI, and messy code — all of which we fix together throughout the course.

## Getting Started

```bash
npm install
npm run dev
```

Then open your browser at `http://localhost:5173`.

## Docker

### Development

Runs Vite dev server with hot reload on port `7777`.

```bash
docker compose --profile dev up
```

### Production

Builds the app and serves it via nginx on port `8080`.

```bash
docker compose --profile prod up --build
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
