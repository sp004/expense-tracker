import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import TransactionHistory from "./components/TransactionHistory";
import TransactionContextProvider from "./context/transactionContext";

function App() {
  return (
    <TransactionContextProvider>
    <div className="wrapper mx-auto flex justify-center items-center w-full bg-cyan-200 h-fit min-h-screen">
      <div className="container w-1/2 h-fit bg-orange-300 rounded-md shadow-slate-600">
        <Balance />
        <hr />
        <p className="text-center uppercase mt-3 text-lg font-semibold">Add Transaction</p>
        <div className='w-full flex justify-center my-3'>
          <AddTransaction />
        </div>
        <TransactionHistory />
      </div>
    </div>
    </TransactionContextProvider>
  );
}

export default App;
