import React, {useContext} from 'react'
import { TransactionContext } from '../context/transactionContext'

export default function () {
  const ctx = useContext(TransactionContext)
  console.log("balance", ctx.transactions)
  return (
    <div className='expense_tracker w-full text-center uppercase font-medium text-lg'>
        <h1 className='underline underline-offset-4 py-2'>Expense Tracker</h1>
        <p>current balance</p>
        <p>RS. {ctx.transactions.map((el) => el.amount).reduce((acc, curr) => (acc + curr), 0)}/-</p>
    </div>
  )
}
