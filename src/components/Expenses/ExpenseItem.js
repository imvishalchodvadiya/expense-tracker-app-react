import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    
    const expenseTitle = props.expenses.title;
    const expenseDate = props.expenses.date;
    const expenseAmount = props.expenses.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}