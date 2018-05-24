import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import ConfigureStore from './store/ConfigureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=ConfigureStore();

store.dispatch(addExpense({description:'water bill',amount:300,createdAt:2000}));
store.dispatch(addExpense({description:'rent bill',amount:7000,createdAt:1000}));
store.dispatch(addExpense({description:'gas bill',amount:400,createdAt:-100}));
store.dispatch(setTextFilter('bill'));
const state=store.getState()
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);

console.log(store.getState())

console.log(visibleExpenses);

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));







