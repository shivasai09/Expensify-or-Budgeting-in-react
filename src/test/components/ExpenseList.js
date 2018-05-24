import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import  '../setupTests.js';
import moment from 'moment';


const expenses=[{
    id:'1',
    description:'rent',
    note:'rent is expensive',
    amount:34545,
    createdAt:moment(0)
}]


describe('a test suite for the Expense list',()=>{
  
    it('for normal arguments',()=>{
   const wrapper=new shallow(<ExpenseList expenses={expenses}/>)
        expect(wrapper.find('h1').length).toBe(1)
    })
})