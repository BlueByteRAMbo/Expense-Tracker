import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense){
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  function handleDeleteExpense(id){
    setExpenses((prevExpenses)=>{
      return prevExpenses.filter((expense) => expense.id !== id)
    })
  }

  return (
    <>
      <Header />

      <ExpenseForm 
      onAddExpense={handleAddExpense} 
      />

      {console.log(expenses)}

      <ExpenseList 
      expenses={expenses} 
      onDeleteExpense={handleDeleteExpense}
      />
      <p>Total Expenses: {expenses.length}</p>
    </>
  );
}

export default App;