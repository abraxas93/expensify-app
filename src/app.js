
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/style.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
)

// /edit 
// /help

const routes = ( 
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);



ReactDOM.render(routes, document.getElementById('app'));
