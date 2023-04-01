import React from "react";
import ExpenseItem from "./components/Expenseltem";

function App() {
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



 



      <ExpenseItem                          //* <-- render Karne Ka pahla Tarika yah hai
        data={expentse[0].date}
        title={expentse[0].title}
        amount={expentse[0].amount}
      />

      <ExpenseItem
        data={expentse[1].date}
        title={expentse[1].title}
        amount={expentse[1].amount}
      />

      <ExpenseItem
        data={expentse[2].date}
        title={expentse[2].title}
        amount={expentse[2].amount}
      />

      <ExpenseItem
        data={expentse[3].date}
        title={expentse[3].title}
        amount={expentse[3].amount}
      />




   {/* {expentse.map((element, index) => {              //* <-- render Karne Ka dusra Tarika yah hai
        return (

          <ExpenseItem
            data={element.date}
            title={element.title}
            amount={element.amount}
          />
          
        );

    })} */}



      
    </div>
  );
}

export default App;
