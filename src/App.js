import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: Date.now(),
      date: '2025-04-10',
      description: '🛒 Groceries',
      category: '🍎 Food',
      amount: 2500,
    },
    {
      id: Date.now() + 1,
      date: '2025-04-11',
      description: '🎬 Netflix',
      category: '🎭 Entertainment',
      amount: 1000,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('description');

  const sortExpenses = (expenses) => {
    return [...expenses].sort((a, b) => {
      if (sortBy === 'description') {
        return a.description.localeCompare(b.description);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const filterExpenses = (expenses) => {
    return expenses.filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Date.now() },
    ]);
  };

  const sortedExpenses = sortExpenses(expenses);
  const filteredExpenses = filterExpenses(sortedExpenses);

  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <p className="motto">✨ Smart spending, smart saving.</p>

      <div className="layout">
        <div className="left-column">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExpenseForm setExpenses={addExpense} />
          <label>🔽 Sort by:</label>
          <select onChange={handleSortChange} value={sortBy}>
            <option value="description">📝 Description</option>
            <option value="category">📂 Category</option>
          </select>
        </div>

        <div className="right-column">
          <ExpenseTable expenses={filteredExpenses} setExpenses={setExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
