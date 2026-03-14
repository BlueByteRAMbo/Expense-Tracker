import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CategoryTabs from "./components/CategoryTabs";
import MonthSelector from "./components/MonthSelector";
import './styles/main.css'

function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(expense) {
    setExpenses(prev => [...prev, expense]);
  }

  function handleDeleteExpense(id) {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  }

  const filteredExpenses = expenses.filter(exp => {

    const categoryMatch =
      activeCategory === "All" || exp.category === activeCategory;

    const monthMatch =
      !selectedMonth || exp.date.startsWith(selectedMonth);

    return categoryMatch && monthMatch;
  });

  return (
    <div className="app">

      <Header />

      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <MonthSelector
        expenses={expenses}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <div className="dashboard">

        <ExpenseForm onAddExpense={handleAddExpense} />

        <SummaryPanel expenses={filteredExpenses} />

      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
      />

    </div>
  );
}

export default App;