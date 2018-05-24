import React from 'react';
import {shallow} from 'enzyme';
import  '../setupTests.js';
import moment from 'moment';
import ExpenseListItem from '../../components/ExpenseListItem';


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


describe("suite for Expense list Item",()=>{
    it('only one data',()=>{
        const wrapper= new shallow(<ExpenseListItem {...expenses[2]}/>)
        expect(wrapper.find('h3').text()).toBe('shopping')

    })
})