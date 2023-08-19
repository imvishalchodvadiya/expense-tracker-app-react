import './components/UI/Expense.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import ExpensesChart from './components/Expenses/ExpensesChart';

function App() {

  const [expenses, setExpenses] = useState([]);

  const getExpense = (res) => {
    setExpenses((prevExpense) => { return [res, ...prevExpense] });
  }

  return (
    <div>
      <NewExpense onExpesneResult={getExpense} />
      <Card className="expenses">
        <ExpensesChart expenses={expenses}></ExpensesChart>
        {expenses.length === 0 ? <p>No Expense Found...</p> :
          (
            expenses.map((expense) => <ExpenseItem expenses={expense} key={expense.id} />)
          )}
      </Card>
    </div>
  );
}

export default App;
