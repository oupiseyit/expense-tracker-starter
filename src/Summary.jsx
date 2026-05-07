function Summary({ transactions }) {
  const { totalIncome, totalExpenses } = transactions.reduce(
    (acc, t) => {
      const amt = parseFloat(t.amount);
      if (t.type === "income")  acc.totalIncome   += amt;
      if (t.type === "expense") acc.totalExpenses += amt;
      return acc;
    },
    { totalIncome: 0, totalExpenses: 0 }
  );

  const balance = totalIncome - totalExpenses;

  const fmt = (n) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="summary">
      <div className="summary-card income-card">
        <h3>Total Income</h3>
        <p className="income-amount">${fmt(totalIncome)}</p>
      </div>
      <div className="summary-card expense-card">
        <h3>Total Expenses</h3>
        <p className="expense-amount">${fmt(totalExpenses)}</p>
      </div>
      <div className="summary-card balance-card">
        <h3>Net Balance</h3>
        <p className={`balance-amount${balance < 0 ? ' negative-balance' : ''}`}>
          {balance < 0 ? `-$${fmt(Math.abs(balance))}` : `$${fmt(balance)}`}
        </p>
      </div>
    </div>
  );
}

export default Summary
