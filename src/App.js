import React, {useState} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: 350,
    date: new Date(2022, 4, 28),
  },
  {
    id: "e2",
    title: "Books",
    amount: 250,
    date: new Date(2022, 2, 20),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 800,
    date: new Date(2022, 8, 15),
  },
  {
    id: "e4",
    title: "Food",
    amount: 540,
    date: new Date(2022, 1, 10),
  },
];


const App = () => {


 const [expenses,setExpenses] = useState(DUMMY_EXPENSE)



  const addExpenseHandler = (expense) => {
   

    const updatedExpense = [expense,...expenses]           //* <-- 3 ...meaning this ( All property old object data copy new object data then add)
    setExpenses(updatedExpense);
    console.log(expense)

};
  
  
  
  

  return (
    <div>

        <NewExpense onAddExpense={addExpenseHandler}/>                   {/* <--  DATA Receive (Child-to-Parent) */}

        <Expense item={expenses}/>
        
    </div>
  );


}

export default App;
