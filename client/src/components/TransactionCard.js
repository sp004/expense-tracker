import React, {useContext} from 'react'
import { TransactionContext } from "../context/transactionContext";

export default function TransactionCard(props) {
  const ctx = useContext(TransactionContext);

  return (
    <li className={`${props.amount < 0 ? 'bg-red-200 hover:bg-red-300' : 'bg-green-200 hover:bg-green-300'} h-10 flex justify-between items-center px-4`}>
        <p><span className='text-red-800 px-1 rounded-full bg-white text-lg font-bold mr-4 cursor-pointer'
        onClick={() => ctx.onDeleteTransaction(props.id)}>X</span>{props.text}</p>
        <p className='font-medium'>RS: {props.amount}/-</p>
    </li>
  )
}
