import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducersDefaultState = [];

const expensesReducer = (state = expensesReducersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Store creation

//const store = createStore(expensesReducer);

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());

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

