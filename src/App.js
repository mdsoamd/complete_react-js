import React from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";



const App = () => {

  let expentse = [
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

  return (
    <div>
        <NewExpense/>
        <Expense item={expentse}/>
        
    </div>
  );


}

export default App;
