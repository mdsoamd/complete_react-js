import React from "react";
import './Expense.css'
import ExpenseItem from './Expenseltem';
import Card from '../UI/Card';





const Expense = (props) => {

    return(

        <Card className='expenses'>

           {

                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key={ expense.id }
                            date={ expense.date } 
              r             title={ expense.title } 
                            amount={ expense.price} />
                    )
                )


            }

            
        </Card>
    )
    
}


export default Expense;