import React, {useContext} from 'react'
import { TransactionContext } from '../context/transactionContext'
import TransactionCard from './TransactionCard'

export default function TransactionHistory() {
  const ctx = useContext(TransactionContext)
  console.log(ctx.transactions)
  return (
    
    <div className='w-full flex flex-col space-y-3 justify-center items-center mx-auto py-3'>
        <h1 className='text-center uppercase text-xl font-medium'>Transaction History</h1>
        <ul className='w-[60%] bg-white rounded-md flex flex-col space-y-1'>
          {ctx.transactions.map((transaction) => (
            <TransactionCard key={transaction.id} text={transaction.text} amount={transaction.amount} id={transaction.id} />
          ))}
        </ul>
    </div>
  )
}
