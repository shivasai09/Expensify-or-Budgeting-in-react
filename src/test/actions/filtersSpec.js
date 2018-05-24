import {setEndDate,setTextFilter,sortByDate,sortByAmount,setStartDate} from '../../actions/filters';
import moment from 'moment';

describe("this is actions/filters.js testing",()=>{

    it("spec for the setTextFlter when argument is present",()=>{
        const action =setTextFilter('hello');
        expect(action).toBeDefined();
        expect(action.type).toBe('SET_TEXT_FILTER');
        expect(action.text).toEqual('hello');
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:'hello'
        })
    })


    it("spec for the setTextFilter when no argument is present",()=>{
        const action=setTextFilter('');
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:''
        })
    })

    it('spec for the SortByAmount',()=>{
        const action=sortByAmount();
        expect(action).toEqual({
            type:'SORT_BY_AMOUNT'
        })
    })

    it('spec for SortByDate',()=>{
        const action=sortByDate();
        expect(action).toEqual({
            type:'SORT_BY_DATE'
        })
    })

    it('spec for SetSTartDate',()=>{
         const action=setStartDate(moment(0))
         expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate:moment(0)
         })
    })

    it('spec for SetEndDate',()=>{
        const action=setEndDate(moment(0))
        expect(action).toEqual({
            type:'SET_END_DATE',
            endDate:moment(0)
        })
    })


})