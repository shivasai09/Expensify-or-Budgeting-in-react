import selectExpenses from '../../selectors/expenses';
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


describe("this is /selector/expenses.js testing",()=>{
    

    it("test spec for the filter by text value",()=>{

       const filters={
           text:'e',
           sortBy:'date',
           startDate:undefined,
           endDate:undefined
       };


       const result = selectExpenses(expenses,filters)
        expect(result).toEqual([expenses[0],expenses[1]])
    })


    it('test spec for the filter by the start date',()=>{
        
        const filters={
            text:'',
            sortBy:'date',
            startDate:moment(0),
            endDate:undefined
        };

        const result = selectExpenses(expenses,filters)
        expect(result).toEqual([expenses[2],expenses[0]])
        
    })

    it('test spec fro the filter by the end date',()=>{

        const filters={
            text:'',
            sortBy:'date',
            startDate:undefined,
            endDate:moment(0)
            
        };
        const result = selectExpenses(expenses,filters)
        expect(result).toEqual([expenses[0],expenses[1]])

    })


    it('test spec for the sort by date',()=>{
        const filters={
            text:'',
            sortBy:'date',
            startDate:undefined,
            endDate:undefined,
            
        };
        const result = selectExpenses(expenses,filters)
        expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
    })

    it('test spec for the sort by the amount',()=>{
        const filters={
            text:'',
            sortBy:'amount',
            startDate:undefined,
            endDate:undefined,
            
        }; 
        const result = selectExpenses(expenses,filters)
        expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
    })

})