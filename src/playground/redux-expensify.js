import { createStore, combineReducers } from 'redux';



// timestamps (milliseconds)
// unix epoch time
// 33400, 10, -203

/*
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
}); */

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 400, createAt: -2100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createAt: -1000 }));
//console.log(expenseOne);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//console.log(store.getState());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//tore.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'poisjgfs',
        description: 'January rent',
        note: 'This was the final payment for that adress',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

