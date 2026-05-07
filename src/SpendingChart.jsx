import { useMemo } from 'react'
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Cell, CartesianGrid, ResponsiveContainer } from 'recharts'
import { CATEGORIES } from './constants'

const COLORS = ['#b8602a', '#4a6fa5', '#3d8b7a', '#c9953a', '#8b6aaa', '#5c8a6e', '#8a7060']

function SpendingChart({ transactions, theme }) {
  const isNight = theme === 'night'

  const data = useMemo(() => CATEGORIES
    .map((cat, i) => ({
      name: cat,
      value: transactions
        .filter(t => t.type === 'expense' && t.category === cat)
        .reduce((sum, t) => sum + parseFloat(t.amount), 0),
      color: COLORS[i] ?? '#888888',
    }))
    .filter(d => d.value > 0),
  [transactions])

  const { tickStyle, tooltipStyle, gridStroke, lineColor } = useMemo(() => ({
    tickStyle: {
      fontSize: 11,
      fill: isNight ? '#7a6048' : '#a88c7a',
      fontFamily: "'DM Sans', system-ui, sans-serif",
    },
    tooltipStyle: {
      background: isNight ? '#2e2010' : '#ffffff',
      border: `1px solid ${isNight ? '#3e2e18' : '#e6ddd0'}`,
      borderRadius: 8,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: 13,
      color: isNight ? '#f4e8d0' : '#2a1f14',
      boxShadow: isNight
        ? '0 4px 16px rgba(0,0,0,0.35)'
        : '0 4px 16px rgba(42,31,20,0.1)',
    },
    gridStroke: isNight ? '#3e2e18' : '#e6ddd0',
    lineColor:  isNight ? '#d4784a' : '#b8602a',
  }), [isNight])

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p className="chart-empty">No expense data to display.</p>
      </div>
    )
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis
            dataKey="name"
            tick={tickStyle}
            axisLine={{ stroke: gridStroke }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={tickStyle}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            itemStyle={{ color: isNight ? '#f4e8d0' : '#2a1f14' }}
            labelStyle={{ color: isNight ? '#7a6048' : '#a88c7a', fontSize: 11, textTransform: 'capitalize', marginBottom: 4, fontWeight: 500 }}
            formatter={(value) => [`$${value.toFixed(2)}`, 'Spent']}
            cursor={{ fill: isNight ? 'rgba(255,200,140,0.04)' : 'rgba(42,31,20,0.03)' }}
          />
          <Bar dataKey="value" radius={[5, 5, 0, 0]} maxBarSize={52}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} opacity={isNight ? 0.9 : 0.85} />
            ))}
          </Bar>
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={{ r: 4, fill: lineColor, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: isNight ? '#e8935f' : '#cf7a44', strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
