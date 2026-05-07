import { useState, useEffect, useRef } from 'react'
import './App.css'
import Summary from './Summary'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import SpendingChart from './SpendingChart'

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M12.5 8A5.5 5.5 0 0 1 7 13.5 5.5 5.5 0 0 1 1.5 8 5.5 5.5 0 0 1 7 2.5a4.2 4.2 0 0 0 5.5 5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="7.5" y1="1"   x2="7.5" y2="2.5"  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="7.5" y1="12.5" x2="7.5" y2="14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="1"   y1="7.5" x2="2.5"  y2="7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="12.5" y1="7.5" x2="14" y2="7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="2.93" y1="2.93" x2="4.05" y2="4.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="10.95" y1="10.95" x2="12.07" y2="12.07" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="12.07" y1="2.93" x2="10.95" y2="4.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="4.05" y1="10.95" x2="2.93" y2="12.07" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 5000, type: "income", category: "salary", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 1200, type: "expense", category: "housing", date: "2025-01-02" },
    { id: 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: "2025-01-03" },
    { id: 4, description: "Freelance Work", amount: 800, type: "income", category: "salary", date: "2025-01-05" },
    { id: 5, description: "Electric Bill", amount: 95, type: "expense", category: "utilities", date: "2025-01-06" },
    { id: 6, description: "Dinner Out", amount: 65, type: "expense", category: "food", date: "2025-01-07" },
    { id: 7, description: "Gas", amount: 45, type: "expense", category: "transport", date: "2025-01-08" },
    { id: 8, description: "Netflix", amount: 15, type: "expense", category: "entertainment", date: "2025-01-10" },
  ]);

  const [theme, setTheme] = useState(() => localStorage.getItem('ft-theme') || 'day');
  const transitionTimer = useRef(null);

  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ft-theme', theme);
  }, [theme]);

  useEffect(() => () => clearTimeout(transitionTimer.current), []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transitioning');
    setTheme(t => t === 'day' ? 'night' : 'day');
    clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(
      () => document.documentElement.classList.remove('theme-transitioning'),
      400
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Finance <em>Tracker</em></h1>
          <p className="subtitle">Your personal money journal</p>
        </div>
        <div className="header-meta">
          <div className="header-date">{dateStr}</div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'day' ? 'Switch to night mode' : 'Switch to day mode'}
            title={theme === 'day' ? 'Night mode' : 'Day mode'}
          >
            {theme === 'day' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </header>

      <Summary transactions={transactions} />
      <TransactionForm onAdd={(t) => setTransactions(prev => [...prev, t])} />
      <TransactionList transactions={transactions} onDelete={(id) => setTransactions(prev => prev.filter(tx => tx.id !== id))} />
      <SpendingChart transactions={transactions} theme={theme} />
    </div>
  );
}

export default App
