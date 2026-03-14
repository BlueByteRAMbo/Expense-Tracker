function ExpenseItem({expense, onDeleteExpense}){

    function handleDelete(){
        onDeleteExpense(expense.id)
    }
    return(
        <div>
        <h5>
        {expense.name} | {expense.amount} | {expense.category}
        <button onClick={handleDelete}>Delete</button>
        </h5>
        </div>
    );
}

export default ExpenseItem;