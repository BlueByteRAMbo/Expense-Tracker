import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {

  if (expenses.length === 0)
    return <p>No expenses found</p>;

  return (
    <table className="expense-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map(exp => (
          <ExpenseItem
            key={exp.id}
            expense={exp}
            onDeleteExpense={onDeleteExpense}
          />
        ))}
      </tbody>

    </table>
  );
}

export default ExpenseList;