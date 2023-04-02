import React from "react";
import './Expense.css'
import ExpenseItem from './Expenseltem';
import Card from '../UI/Card';




const Expense = (props) => {

    return(

        <Card className='expenses'>

            <ExpenseItem                        
                date={props.item[0].date}
                title={props.item[0].title}
                amount={props.item[0].amount}
            />

            <ExpenseItem
                date={props.item[1].date}
                title={props.item[1].title}
                amount={props.item[1].amount}
            />

            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount}
            />

            <ExpenseItem
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount}
            />




         

            {/* {props.item.map((element, index) => {              //* <-- render Karne Ka dusra Tarika yah hai
        return (

                <ExpenseItem
                    data={element.date}
                    title={element.title}
                    amount={element.amount}
                />
                
                );

            })} */}



            

            
        </Card>
    )
    
}


export default Expense;