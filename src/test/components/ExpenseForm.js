import React from 'react';
import {shallow} from 'enzyme';
import  '../setupTests.js';
import {SingleDatePicker} from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';

describe('a test suite for the expense form ',()=>{
    it('first test',()=>{
        const wrapper =new shallow(<ExpenseForm/>)
        expect(wrapper.find('h1').length).toBe(1)
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find(SingleDatePicker).length).toBe(1);
      
    })
    it('should render correct error msg when no description is provided',()=>{
        const wrapper =new shallow(<ExpenseForm/>)
        wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
        })
        expect(wrapper.state('error').length).toBeGreaterThan(0)
    })

    it('should set description onchange',()=>{
        const value='new description'
        const wrapper =new shallow(<ExpenseForm/>)
        wrapper.find('input').at(0).simulate('change',{
            target:{value}
        })
        expect(wrapper.state('description')).toBe(value)

    })

    it('should show the correct not always',()=>{
        const value='hello world'
        const wrapper=new shallow(<ExpenseForm/>)
        wrapper.find('textarea').simulate('change',{
            target:{value}
        })
        expect(wrapper.state('note')).toBe(value)
    })

    it('should take amount when valid',()=>{
        const value ="56.43";
        const wrapper=new shallow(<ExpenseForm/>)
        wrapper.find('input').at(1).simulate('change',{
            target:{value}
        })
        expect(wrapper.state('amount')).toBe(value)
       
    })

    it('should not take amount when invalid',()=>{
        const value ="56.4gr3";
        const wrapper=new shallow(<ExpenseForm/>)
        wrapper.find('input').at(1).simulate('change',{
            target:{value}
        })
        expect(wrapper.state('amount')).toBe('')
       
    })

})