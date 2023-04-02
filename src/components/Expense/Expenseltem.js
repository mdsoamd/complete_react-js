import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


//TODO This is Component
const ExpenseItem = (props) => {
  
    
    
    return(
        <Card className='expens-item'>

          <ExpenseDate date={props.date}/>

            <div className='expens-item__description'>
                <h2>{props.title}</h2>
                <div className='expens-item__price'>${props.amount}</div>
            </div>
            
        </Card>
    )
}


export default ExpenseItem