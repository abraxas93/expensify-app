
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 150, createdAt: 0}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: -1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 330, createdAt: 0 }));


store.subscribe(() => {
    console.log(store.getState());
});
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

ReactDOM.render(jsx, document.getElementById('app'));
