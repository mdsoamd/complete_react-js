import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


//TODO This is Component
const ExpenseItem = (props) => {

   const [newTitle,setNewTitle] = useState('')      //*  <-- by default value Ek Dena padta hai

   const [title,setTitle] = useState(props.title)   //*  <-- by default value Ek Dena padta hai
  
    const clickHandler = () => {
       setTitle(newTitle)
    }


    const changeHandler = (event) => {
       setNewTitle(event.target.value)     //* <-- input field Value get event
    }



    
    
    return(
        <Card className='expens-item'>

          <ExpenseDate date={props.date}/>

            <div className='expens-item__description'>
                
                <h2>{title}</h2>

                <div className='expens-item__price'>${props.amount}</div>
            </div>

            <input type="text" value={newTitle} onChange={changeHandler}/>

            <button onClick={clickHandler}>Change Title</button>
            
        </Card>
    )
}


export default ExpenseItem