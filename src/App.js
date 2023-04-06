import React, {useState, useEffect} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [];


const App = () => {

 const [expenses,setExpenses] = useState(DUMMY_EXPENSE);


 function fetchData(){

      fetch("http://localhost:5000/api/v1/get").then(                   //* <-- API - GET Request

      response => {

        return response.json();
          
      }).then(
        data => {
          console.log(data);
          setExpenses(data);
        }
    )
  
   
 }
 
 

 useEffect(() => {

    fetchData()     //* <-- fetchData function call

 },[]);

 







  const addExpenseHandler = (expense) => {

    fetch("http://localhost:5000/api/v1/post",{         //* <-- API - Post Request
      method:'POST',
      body:JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
      },
       
    }).then(

      response =>{

          fetchData()      //* <-- fetchData function call
          
      }

    )
    
    
  
    //! const updatedExpense = [expense,...expenses]           //* <-- 3 ...meaning this ( All property old object data copy new object data add karta hai)
    //! setExpenses(updatedExpense);

};
  
  
  
  

  return (
    <div>

        <NewExpense onAddExpense={addExpenseHandler}/>                   {/* <--  DATA Receive (Child-to-Parent) Function addExpenseHandler call */}

        <Expense item={expenses}/>   {/* Data Send Expense Component */}
        
    </div>
  );


}

export default App;
