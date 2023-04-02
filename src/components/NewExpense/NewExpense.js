import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'






const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {             //* <--  DATA Receive (Child-to-Parent)

    //* receive data changes
    const expenseData = {
        ...enteredExpenseData,            //* <-- 3 ...meaning this ( All property old object data copy new object data then add)
        id: Math.random().toString()
    }

     props.onAddExpense(expenseData);        //* <--  DATA Transfer & Send (Child-to-Parent)

     console.log(expenseData);
};
  

  
  return (
    <div className='new-expense'>

      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

    </div>
  )
}




export default NewExpense