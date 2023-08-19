import ExpenseForm from './ExpenseFrom';
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseData = (res) => {
        const expenseData = {
            ...res,
            id: Math.random().toString()
        }
        props.onExpesneResult(expenseData);
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;