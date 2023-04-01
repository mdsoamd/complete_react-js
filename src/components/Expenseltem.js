import './ExpenseItem.css'

//TODO This is Component
function ExpenseItem(props){
    const month = props.data.toLocaleString('en-US',{month:'long'})
    const year = props.data.getFullYear()
    const day = props.data.toLocaleString('en-US',{day:'2-digit'})
    
    
    return(
        <div className='expens-item'>

            <div>
                
                <div>{ month }</div>
                <div>{ year }</div>
                <div>{ day }</div>

            </div>
            <div className='expens-item__description'>
                <h2>{props.title}</h2>
                <div className='expens-item__price'>${props.amount}</div>
            </div>
            
        </div>
    )
}


export default ExpenseItem