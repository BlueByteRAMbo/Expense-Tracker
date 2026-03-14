import { useState } from "react";
import { categories } from "../utils/categories";

function ExpenseForm({ onAddExpense }) {

  const today = new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(today);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !amount) return;

    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
      date
    };

    onAddExpense(newExpense);

    setName("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Expense name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button>Add Expense</button>

    </form>
  );
}

export default ExpenseForm;