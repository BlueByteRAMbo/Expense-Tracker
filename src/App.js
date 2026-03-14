import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";

function App() {

  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <>
      <Header />

      <ExpenseForm onAddExpense={handleAddExpense} />
      {console.log(expenses)}
      <p>Total Expenses: {expenses.length}</p>
    </>
  );
}

export default App;