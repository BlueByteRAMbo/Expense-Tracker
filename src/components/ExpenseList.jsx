import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {

  if (expenses.length === 0)
    return <p>No expenses found</p>;

  return (
    <div>

      {expenses.map(exp => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          onDeleteExpense={onDeleteExpense}
        />
      ))}

    </div>
  );
}

export default ExpenseList;