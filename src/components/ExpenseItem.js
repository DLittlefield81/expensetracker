import './ExpenseItem.css'

function ExpenseItem()  {
    const expenseDate = new Date(2015, 3, 25);
    const expenseTitle = 'Expense';
    const expenseAmount = 300.00;

  return (
      <div className='expense-item'>
          <div>{expenseDate.toISOString()}</div>
          <div className='expense-item__description'>
              <h2>{expenseTitle}</h2>
          </div>
          <div className='expense-item__price'>${expenseAmount}</div>
          
    </div>
  )
}

export default ExpenseItem