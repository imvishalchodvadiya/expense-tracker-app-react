import './ExpenseItem.css'

export default function ExpenseDate(props) { 
    const expenseDate = props.date;
    return (
        <div className="expense-date">
            <div className="expense-date_month">{expenseDate.toLocaleString('en-US',{month: 'long'})}</div>
            <div className="expense-date_year">{expenseDate.getFullYear()}</div>
            <div className="expense-date_day">{expenseDate.toLocaleString('en-US',{day: '2-digit'})}</div>
        </div>
    );
}    