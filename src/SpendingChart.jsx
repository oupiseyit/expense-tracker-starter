import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts'

const COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22']

function SpendingChart({ transactions }) {
  const categories = ['food', 'housing', 'utilities', 'transport', 'entertainment', 'salary', 'other']

  const data = categories
    .map((cat, i) => ({
      name: cat,
      value: transactions
        .filter(t => t.type === 'expense' && t.category === cat)
        .reduce((sum, t) => sum + t.amount, 0),
      color: COLORS[i],
    }))
    .filter(d => d.value > 0)

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p style={{ color: '#888', fontSize: 14 }}>No expense data to display.</p>
      </div>
    )
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ComposedChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(v) => `$${v}`} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar dataKey="value">
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Bar>
        <Line type="linear" dataKey="value" stroke="#333" strokeWidth={2} dot={{ r: 4 }} />
      </ComposedChart>
    </div>
  )
}

export default SpendingChart
