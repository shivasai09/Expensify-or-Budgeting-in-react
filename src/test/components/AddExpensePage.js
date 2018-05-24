import React from 'react';
import {shallow} from 'enzyme';
import  '../setupTests.js';
import  {AddExpensePage} from '../../components/AddExpensePage';
import moment from 'moment';
 import ExpenseForm  from '../../components/ExpenseForm';

const expenses=[{
    id:'1',
    description:'rent',
    note:'rent is expensive',
    amount:34545,
    createdAt:moment(0)
 },{
    id:'2',
    description:'coffe',
    note:'coffee is expensive',
    amount:3454,
    createdAt:moment(0).subtract(4,'days').valueOf()
 },{
    id:'3',
    description:'shopping',
    note:'shopping is expensive',
    amount:800000,
    createdAt:moment(0).add(4,'days').valueOf()
 }
]


describe('for add expenese page',()=>{
    it('for on submit',()=>{
        // const onSubmit=()=>{}
     
    
    })
})