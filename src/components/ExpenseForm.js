import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !category || !amount || !date) {
      alert('🚫 All fields are required!');
      return;
    }

    const newExpense = {
      description: `📝 ${description}`,
      category: `📂 ${category}`,
      amount: parseFloat(amount),
      date,
    };

    onAddExpense(newExpense); // ✅ Correct usage now

    // Reset form fields
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="container">
      <h2>➕ Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="📝 Expense Description"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="📂 Category"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="💰 Amount"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">➕ Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
