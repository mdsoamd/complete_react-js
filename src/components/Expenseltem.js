import './ExpenseItem.css'


function ExpenseItem(){
    return(
        <div className='expens-item'>

            <div>Macth 12th 20021</div>
            <div className='expens-item__description'>
                <h2>Car Insurance</h2>
                <div className='expens-item__price'>$200</div>
            </div>
            
        </div>
    )
}


export default ExpenseItem