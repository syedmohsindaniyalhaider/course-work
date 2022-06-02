import React, { useState } from "react";

const ExpenseForm = ({ saveExpenseData }) => {

    const [_title, setTitle] = useState('');
    const [_amount, setAmount] = useState('');
    const [_date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: _title,
            amount: _amount,
            date: _date

        }
        saveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <>
            <div className="container my-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="my-2">
                        <label>Title:</label>
                        <input type="text" className="form-control" value={_title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" name="title" />
                    </div>
                    <div className="my-2">
                        <label>Amount:</label>
                        <input type="text" className="form-control" value={_amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" name="amount" />
                    </div>
                    <div className="my-2">
                        <label>Date:</label>
                        <input type="date" className="form-control" value={_date} onChange={(e) => setDate(e.target.value)} name="date" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}

const ExpenceCard = ({ expenseData }) => {

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenseData.map((item) => (
                                <tr key={item?.id}>
                                    <td>{item?.title}</td>
                                    <td>{item?.amount}</td>
                                    <td>{item?.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Expense = () => {

    const expenseList = [
        { id: 1, title: 'Car Insurance', amount: '234.3', date: '2021-04-12' },
        { id: 2, title: 'Health Insurance', amount: '234.3', date: '2021-04-12' },
        { id: 3, title: 'Toiled Paper', amount: '234.3', date: '2021-04-12' },
        { id: 4, title: 'Amazon Services', amount: '234.3', date: '2021-04-12' },
        { id: 5, title: 'Car Maintenance', amount: '234.3', date: '2021-04-12' },
        { id: 6, title: 'New Clother', amount: '234.3', date: '2021-04-12' },
    ];

    const [list, setList] = useState(expenseList)

    const addData = (newExpenseData) =>{
        console.log("NewData :: ", newExpenseData)

    }

    const saveExpense = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        addData(expenseData);
    }

    return (
        <>
            <ExpenseForm saveExpenseData={saveExpense} />
            <ExpenceCard expenseData={expenseList} />
        </>
    );
}

export default Expense