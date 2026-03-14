import { PieChart, Pie, Tooltip, Cell } from "recharts";

function SummaryPanel({ expenses }) {

  const total = expenses.reduce(
    (sum, exp) => sum + exp.amount, 0
  );

  const grouped = expenses.reduce((acc, exp) => {

    if (!acc[exp.category]) acc[exp.category] = 0;
    acc[exp.category] += exp.amount;

    return acc;

  }, {});

  const chartData = Object.entries(grouped).map(
    ([name, value]) => ({ name, value })
  );

  const COLORS = [
    "#6366f1","#22c55e","#f59e0b","#ef4444","#06b6d4"
  ];

  return (
    <div>

      <h3>Total Spending</h3>

      <p className="total">${total}</p>

      <PieChart width={300} height={220}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

      </PieChart>

    </div>
  );
}

export default SummaryPanel;