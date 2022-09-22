import './ExpenseItem.css'

function ExpenseItem(props)  {
    const expenseDate = new Date(2015, 3, 25);
    const expenseTitle = 'Expense';
    const expenseAmount = 300.00;

  return (
      <div className='expense-item'>
          <div>{props.date.toISOString()}</div>
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
          </div>
          <div className='expense-item__price'>${props.amount}</div>
          
    </div>
  )
}

export default ExpenseItem