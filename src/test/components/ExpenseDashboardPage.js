import React from 'react';
import {shallow} from 'enzyme';
import  '../setupTests.js';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import ExpenseList from '../../components/ExpenseList';
import ExpenseListFilter from '../../components/ExpenseListFilter';


describe('test suit for expense dashboard page',()=>{
    it('spec 1',()=>{
        const wrapper = new shallow(<ExpenseDashboardPage/>)
        expect(wrapper.find(ExpenseList).length).toBe(1)
        expect(wrapper.find(ExpenseListFilter).length).toBe(1)
    })
})