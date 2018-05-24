import {addExpense,removeExpense,editExpense } from '../../actions/expenses';

describe('This is  /actions/expenses.js testing',()=>{
    
    it("spec for removeExpense",()=>{
        const action=removeExpense({id:'5343'});
        expect(action).toEqual({
            type:'REMOVE_EXPENSE',
            id:'5343'
        })
    })


    it("spec fro addExpense when all arguments are provided",()=>{
        const obj={
            description:'hello world',
            note:'office',
            amount:0,
            createdAt:0
        }
        const action=addExpense(obj);
     

        expect(action).toBeDefined();
        expect(action.expense.id).not.toBeUndefined();
        expect(action.type).toBe('ADD_EXPENSE');
        expect(action.expense.id).toEqual(jasmine.any(String));
        expect(action.expense.description).toEqual('hello world');
        expect(action.expense.amount).toEqual(0)
        expect(action.expense.createdAt).toEqual(0)
        expect(action.expense.note).toEqual('office')
    })

    it("spec for addExpese when no argument is provided",()=>{
        const action=addExpense({})
        expect(action).toBeDefined();
        expect(action.type).toBe("ADD_EXPENSE");
        expect(action.expense.id).toEqual(jasmine.any(String));
        expect(action.expense.description).toEqual('');
        expect(action.expense.amount).toEqual(0);
        expect(action.expense.createdAt).toEqual(0);
        expect(action.expense.note).toBe('');
    });


    it("test spec for the editExpense ",()=>{
        const action=editExpense('232',{note:'hello'})
        expect(action.type).toBe('EDIT_EXPENSE');
        expect(action.id).toBe('232');
        expect(action.updates.note).toBe('hello');
    })


});