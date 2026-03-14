function ExpenseItem({ expense, onDeleteExpense }) {

  return (
    <tr>

      <td>{expense.name}</td>

      <td>{expense.category}</td>

      <td>${expense.amount}</td>

      <td>
        {new Date(expense.date).toLocaleDateString()}
      </td>

      <td>
        <button
          className="delete-btn"
          onClick={() => onDeleteExpense(expense.id)}
        >
          Delete
        </button>
      </td>

    </tr>
  );
}

export default ExpenseItem;