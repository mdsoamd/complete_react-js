import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

const [ enteredTit1e , setEnteredTit1e ] = useState('')
const [ enteredAmount , setEnteredAmount ] = useState('')
const [ enteredDate ,  setEnteredDate ] = useState('')


//TODO Create TitleChangeHandler Finction
const titleChangeHandler = (event)=>{
   setEnteredTit1e(event.target.value)
}

//TODO Create amountChangeHandler Finction
const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value)
}

//TODO Create dateChangeHandler Finction
const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)
}



//TODO Create dateChangeHandler Finction
const submitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
        title: enteredTit1e,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
     
    setEnteredTit1e('')
    setEnteredAmount('')
    setEnteredDate('')
    console.log(expenseData);
    
    
}


    
    
  return (
    <form onSubmit={submitHandler}>

      <div className="new-expense__controls">

        <div className="new-expense__control">

          <label>Title</label>
          <input type="text" value={enteredTit1e} onChange={titleChangeHandler}/>

        </div>

        <div className="new-expense__control">

          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>

        </div>

        <div className="new-expense__control">

          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler}/>

        </div>


      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
