const ExpenseTable = ({ expenses, setExpenses }) => {
    const handleDelete = (id) => {
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>📅 Date</th>
            <th>📝 Description</th>
            <th>📂 Category</th>
            <th>💰 Amount</th>
            <th>❌ Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>KES {expense.amount.toLocaleString()}</td>
              <td>
                <button className="delete" onClick={() => handleDelete(expense.id)}>
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ExpenseTable;
  