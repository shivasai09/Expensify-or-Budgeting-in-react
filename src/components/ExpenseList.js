import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses  from '../selectors/expenses';

export const ExpenseList=(props)=>(
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem {...expense} key={expense.id}/>
        })}
    </div>
);


const mapStateToProps=(state)=>{
    return{
      expenses:SelectExpenses(state.expenses,state.filters)
     
    };
  };
  
  export default connect(mapStateToProps)(ExpenseList);