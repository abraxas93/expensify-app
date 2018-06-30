import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>        
        {props.expenses.length === 0 && <p>Add some expenses to display list</p>}
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })       
        }
    </div>
);

const mapStateProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateProps)(ExpenseList);

// export default ExpenseList;
// export default ConnectedExpenseList;