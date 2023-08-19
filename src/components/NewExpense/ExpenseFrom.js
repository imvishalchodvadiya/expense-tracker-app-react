import { useState } from 'react';
import './NewExpense.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        setTitle: '',
        setAmount: '',
        setDate: '',
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, setTitle: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, setAmount: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, setDate: event.target.value }
        })
    }

    const submitButton = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.setTitle,
            amount: userInput.setAmount,
            date: new Date(userInput.setDate),
        }

        props.onSaveExpenseData(expenseData);

        setUserInput({
            setTitle: '',
            setAmount: '',
            setDate: ''
        });
    }

    return (
        <form className='new-expense' onSubmit={submitButton}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.setTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={userInput.setAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={userInput.setDate} min="2023-08-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;