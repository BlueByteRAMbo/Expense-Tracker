import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function SummaryPanel({ expenses }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) acc[expense.category] = 0;
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  const categoryEntries = Object.entries(groupedExpenses);

  const chartData = Object.entries(groupedExpenses).map(
      ([category, amount]) => ({
        name: category,
        value: amount
      })
    );
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h3>Total Spending</h3>

    <p className="total">${totalAmount}</p>

    {Object.entries(groupedExpenses).map(([cat,val])=>(
      <div className="summary-row" key={cat}>
        <span>{cat}</span>
        <span>${val}</span>
      </div>
    ))}
    <div className="recharts-wrapper">
    <PieChart width={400} height={300} >
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
      >
        {chartData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
    </div>
    </div>
  );
}

export default SummaryPanel;