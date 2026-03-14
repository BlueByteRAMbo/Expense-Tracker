function MonthSelector({ expenses, selectedMonth, setSelectedMonth }) {

  const months = [...new Set(
    expenses.map(exp => exp.date.slice(0,7))
  )];

  return (
    <div className="month-selector">

      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >

        <option value="">All Months</option>

        {months.map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}

      </select>

    </div>
  );
}

export default MonthSelector;