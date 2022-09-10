import React, { useContext, useState } from "react";
import Button from "./Button";
import { TransactionContext } from "../context/transactionContext";
import Input from "./Input";

export default function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const ctx = useContext(TransactionContext);

  const amounts = ctx.transactions.map((el) => el.amount);
  const income = amounts.filter((amount) => amount > 0).reduce((acc, curr) => (acc + curr), 0)
  const expense = amounts.filter((amount) => amount < 0).reduce((acc, curr) => (acc + curr), 0)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount : +amount,
      id: Math.floor(Math.random() * 10000000)
    }

    ctx.onAddTransaction(newTransaction)
    setAmount('')
    setText('')
  };

  const onTextChangeHandler = (value) => {
    setText(value)
  }

  const onAmountChangeHandler = (value) => {
    setAmount(value)
  }

  return (
    <form className="w-2/3 rounded-lg p-2 bg-yellow-300" onSubmit={onSubmitHandler}>
      <div className="flex justify-between font-medium">
        <p className="text-green-600">Total Income : RS. {income}</p>
        <p className="text-red-600">Total Expense : RS. {expense}</p>
      </div>

      <div className="flex flex-col items-center space-y-2 p-2">
        <Input label="Text" type="text" placeholder="Enter Text" enteredData={text} onInputChange={onTextChangeHandler} />
        <Input label="Amount" type="number" placeholder="Enter Amount" enteredData={amount} onInputChange={onAmountChangeHandler} />
      </div>

      <Button type="submit" value="Add Transaction" />
    </form>
  );
}

{/* <div className="flex flex-col items-center space-y-2 w-full">
          <label className='font-medium'>Text</label>
          <input className='rounded-lg h-10 pl-3 w-full outline-0 text-sm' type='text' placeholder='Enter Text' onChange={(e) => setText(e.target.value)} />
        </div>

        <div className="flex flex-col items-center space-y-2 w-full">
          <label className='font-medium'>Amount</label>
          <input className='rounded-lg h-10 pl-3 w-full outline-0 text-sm' type='number' placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
        </div> */}