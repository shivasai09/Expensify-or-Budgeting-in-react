import expensesReducers from '../../reducers/expenses';
import moment from 'moment';


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

describe('testing /reducers/expeses',()=>{
    
     it('testing the initial values of state',()=>{
         const state=expensesReducers(undefined,{type:'@@INIT'})     
           expect(state).toEqual([]);
        })

     it('spec for the adding expense',()=>{
         const state=expensesReducers(expenses,{type:'ADD_EXPENSE',id:'4',description:'pillow',note:'soft',amount:34342,createdAt:moment(0).add(7,'days').valueOf()})
         expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[3]])
     })

     it('spec for Removing the Expense',()=>{
         const state=expensesReducers(expenses,{type:'REMOVE_EXPENSE',id:'1'})
         expect(state).toEqual([expenses[1],expenses[2]])
     })

     it('spec for editing the expense',()=>{
         const action={
             type:'EDIT_EXPENSE',
             id:'2',
             updates:{
                 amount:600
             }
         }
         const state=expensesReducers(expenses,action)
         expect(state[1].amount).toEqual(600)

     })
})