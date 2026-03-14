import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import "./styles/main.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  }

  return (
    <div className="app">

      <Header />

      <div className="dashboard">

        <div className="panel form-panel">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="panel summary-panel">
          <SummaryPanel expenses={expenses} />
        </div>

      </div>

      <div className="panel list-panel">
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>

    </div>
  );
}

export default App;