import filtersReducers from '../../reducers/filters';
import moment from 'moment';


describe('this is for /reducer/filters.js testing',()=>{


    it('initial state shoul havae default values',()=>{
      const state=filtersReducers(undefined,{type:'@@INIT'})
      expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
      })  
    })

    it('spec for the sort by amount',()=>{
        const state=filtersReducers(undefined,{type:'SORT_BY_AMOUNT'})
        expect(state.sortBy).toBe('amount')
    })

    it('spec for sort by date',()=>{
           const  state={
                text:'',
                sortBy:'amount',
                startDate:moment().startOf('month'),
                endDate:moment().endOf('month')
             }
        const action=filtersReducers(state,{type:'SORT_BY_DATE'})
        expect(action.sortBy).toBe('date')
    })

    it('spec for SetTextFilter',()=>{
        const  state={
            text:'hello world',
            sortBy:'amount',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
         }
         const action=filtersReducers(state,{type:'SET_TEXT_FILTER' ,text:'hi pinky'})
         expect(action.text).toBe('hi pinky')
    })

    it('spec for the set start date',()=>{
        const  state={
            text:'hello world',
            sortBy:'amount',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
         }
         const action = filtersReducers(state,{type:'SET_START_DATE',startDate:moment().startOf('month').add(5,'days')})
         expect(action.startDate).toEqual(moment().startOf('month').add(5,'days'))
    })

    it("spec for the SetEndDate",()=>{
        const action=filtersReducers(undefined,{type:'SET_END_DATE',endDate:moment(0).valueOf()})
        expect(action.endDate).toEqual(moment(0).valueOf())
    })
})