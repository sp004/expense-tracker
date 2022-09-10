import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

const TransactionContextProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  const onDeleteTransaction = (id) => {
      console.log("id", id)
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const onAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        onDeleteTransaction,
        onAddTransaction
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;


// [
//     {id: 1, text: "Uber", amount: -200},
//     { id: 2, text: "Amazon", amount: -500},
//     { id: 3, text: "Cashback", amount: +1200 },
//     { id: 4, text: "Interest", amount: +200 }
//   ]