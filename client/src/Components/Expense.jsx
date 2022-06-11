import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const ExpenseForm = ({ saveExpenseData }) => {
  const [_title, setTitle] = useState("");
  const [_amount, setAmount] = useState("");
  const [_date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: _title,
      amount: +_amount,
      date: new Date(_date),
    };
    saveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <>
      <div className="my-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="my-2">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              value={_title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              name="title"
            />
          </div>
          <div className="my-2">
            <label>Amount:</label>
            <input
              type="text"
              className="form-control"
              value={_amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              name="amount"
            />
          </div>
          <div className="my-2">
            <label>Date:</label>
            <input
              type="date"
              className="form-control"
              value={_date}
              onChange={(e) => setDate(e.target.value)}
              name="date"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

const ExpenceCard = ({ expenseData, updatedList }) => {
  const [filterData, setFilterData] = useState(expenseData);

  const selectedValue = (value) => {
    if (value === "select") {
      setFilterData(expenseData);
      updatedList(expenseData);
    } else {
      const newData = expenseData.filter(
        (item) => item.date.getFullYear().toString() === value
      );
      setFilterData(newData);
      updatedList(newData);
    }
  };

  return (
    <>
      <div className="my-4">
        <select
          className="form-control"
          onChange={(e) => selectedValue(e.target.value)}
        >
          <option value="select">select</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item?.id}>
              <td>{item?.title}</td>
              <td>{item?.amount}</td>
              <td>{item?.date.toLocaleDateString("sv-SE")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Expense = () => {
  const expenseList = [
    {
      id: 1,
      title: "Car Insurance",
      amount: "24.3",
      date: new Date(2018, 3, 1),
    },
    {
      id: 2,
      title: "Health Insurance",
      amount: "34.3",
      date: new Date(2021, 8, 1),
    },
    {
      id: 3,
      title: "Toiled Paper",
      amount: "238.3",
      date: new Date(2021, 4, 1),
    },
    { id: 4, title: "Old Paper", amount: "44.3", date: new Date(2021, 7, 1) },
    { id: 5, title: "New Paper", amount: "4.3", date: new Date(2021, 6, 1) },
    {
      id: 6,
      title: "Amazon Services",
      amount: "94.3",
      date: new Date(2022, 1, 1),
    },
    {
      id: 7,
      title: "Car Maintenance",
      amount: "134.3",
      date: new Date(2020, 2, 1),
    },
    { id: 8, title: "New Clother", amount: "24.3", date: new Date(2019, 4, 1) },
    {
      id: 9,
      title: "Health Insurance",
      amount: "98.3",
      date: new Date(2021, 8, 1),
    },
    {
      id: 10,
      title: "New Clother",
      amount: "64.3",
      date: new Date(2019, 7, 1),
    },
  ];

  const [list, setList] = useState(expenseList);
  const [updateList, setUpdateList] = useState(list);

  const addData = (newExpenseData) => {
    setList((prevData) => {
      return [newExpenseData, ...prevData];
    });
  };

  const saveExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addData(expenseData);
  };

  return (
    <>
      <div className="container my-4">
        <ExpenseChart expenses={updateList} />
        <ExpenseForm saveExpenseData={saveExpense} />
        <ExpenceCard expenseData={list} updatedList={setUpdateList} />
      </div>
    </>
  );
};

export default Expense;
