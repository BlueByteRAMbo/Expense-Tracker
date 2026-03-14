import { useState } from "react";
import { categories } from "../utils/categories";

function ExpenseForm({ onAddExpense } = {}){

    const [name,setName] = useState("");
    const [amount,setAmount] = useState("");
    const [category,setCategory] = useState("Food");

    function handleSubmit(event){
        event.preventDefault();

        if( !name || !amount) return;
        
        const newExpense = {
            id: Date.now(),
            name,
            amount: Number(amount),
            category
        };

        onAddExpense?.(newExpense);
        setName("");
        setAmount("");
        setCategory("Food");
    }

    return (
    <form onSubmit={handleSubmit}>

      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">
        Add Expense
      </button>

    </form>
  );
}

export default ExpenseForm;