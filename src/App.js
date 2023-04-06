import React, {useState, useEffect} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [];


const App = () => {

 const [expenses,setExpenses] = useState(DUMMY_EXPENSE)

 useEffect(() => {

  fetch("http://localhost:5000/api/v1/get").then(                   //* <-- API - GET Request

    response => {

      return response.json();
        
    }).then(
      data => {
        console.log(data);
        setExpenses(data);
      }
  )
 },[])

 


  const addExpenseHandler = (expense) => {

          //* Provide User data Receive add
    const updatedExpense = [expense,...expenses]           //* <-- 3 ...meaning this ( All property old object data copy new object data add karta hai)
    setExpenses(updatedExpense);
    console.log(expense);

};
  
  
  
  

  return (
    <div>

        <NewExpense onAddExpense={addExpenseHandler}/>                   {/* <--  DATA Receive (Child-to-Parent) Function addExpenseHandler call */}

        <Expense item={expenses}/>   {/* Data Send Expense Component */}
        
    </div>
  );


}

export default App;
