function ExpenseItem({ expense, onDeleteExpense }) {

  return (
    <div className="expense-item">

      <span>{expense.name}</span>

      <span>{expense.category}</span>

      <span>${expense.amount}</span>

      <span>{expense.date}</span>

      <button
        className="delete-btn"
        onClick={() => onDeleteExpense(expense.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default ExpenseItem;