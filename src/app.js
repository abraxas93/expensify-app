
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill'}));
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
